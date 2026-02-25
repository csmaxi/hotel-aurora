"use client"

import Link from "next/link"
import { Suspense, useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle2, ChevronLeft, ChevronRight, CreditCard, Landmark, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const ROOM_CATALOG = [
  { name: "Habitación Estándar", price: 120 },
  { name: "Suite Aurora", price: 280 },
  { name: "Habitación Familiar", price: 200 },
]

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value)

const getTodayIso = () => {
  const date = new Date()
  const offset = date.getTimezoneOffset() * 60000
  return new Date(date.getTime() - offset).toISOString().slice(0, 10)
}

function ReservarWizard() {
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [isPaying, setIsPaying] = useState(false)
  const [paymentDone, setPaymentDone] = useState<{ method: "total" | "deposit"; amount: number } | null>(null)
  const [form, setForm] = useState({
    room: ROOM_CATALOG[0].name,
    nightlyRate: ROOM_CATALOG[0].price,
    checkIn: "",
    checkOut: "",
    guests: "2",
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  })

  useEffect(() => {
    const roomFromUrl = searchParams.get("habitacion")
    const priceFromUrl = Number(searchParams.get("precio"))
    const matchedRoom = ROOM_CATALOG.find((room) => room.name === roomFromUrl)

    if (matchedRoom) {
      setForm((prev) => ({
        ...prev,
        room: matchedRoom.name,
        nightlyRate: matchedRoom.price,
      }))
      return
    }

    if (roomFromUrl && Number.isFinite(priceFromUrl) && priceFromUrl > 0) {
      setForm((prev) => ({
        ...prev,
        room: roomFromUrl,
        nightlyRate: priceFromUrl,
      }))
    }
  }, [searchParams])

  const nights = useMemo(() => {
    if (!form.checkIn || !form.checkOut) return 0
    const checkInDate = new Date(form.checkIn)
    const checkOutDate = new Date(form.checkOut)
    const diffMs = checkOutDate.getTime() - checkInDate.getTime()
    const calculated = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
    return calculated > 0 ? calculated : 0
  }, [form.checkIn, form.checkOut])

  const subtotal = nights * form.nightlyRate
  const taxes = subtotal * 0.12
  const total = subtotal + taxes
  const deposit = total * 0.3

  const canContinueStep1 = Boolean(form.checkIn && form.checkOut && nights > 0 && Number(form.guests) > 0)
  const canContinueStep2 = Boolean(form.fullName.trim() && form.email.trim() && form.phone.trim())

  const onRoomChange = (roomName: string) => {
    const selected = ROOM_CATALOG.find((room) => room.name === roomName)
    if (!selected) return
    setForm((prev) => ({ ...prev, room: selected.name, nightlyRate: selected.price }))
  }

  const onPay = (method: "total" | "deposit") => {
    const amount = method === "total" ? total : deposit
    if (amount <= 0) return

    setIsPaying(true)
    window.setTimeout(() => {
      setPaymentDone({ method, amount })
      setStep(4)
      setIsPaying(false)
    }, 900)
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif text-slate-900 mt-3">Completar reserva</h1>
          <p className="text-slate-600 mt-2">Wizard rápido para confirmar tu estadía y elegir cómo pagar.</p>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-8">
          {["Estadía", "Huésped", "Pago"].map((label, index) => {
            const current = index + 1
            const active = step >= current
            return (
              <div
                key={label}
                className={`rounded-md border p-3 text-center text-sm font-medium ${
                  active ? "bg-amber-100 border-amber-300 text-amber-900" : "bg-white border-slate-200 text-slate-500"
                }`}
              >
                {current}. {label}
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>
                {step === 1 && "Paso 1: Estadía"}
                {step === 2 && "Paso 2: Datos del huésped"}
                {step === 3 && "Paso 3: Pago"}
                {step === 4 && "Reserva confirmada"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Seleccioná habitación, fechas y cantidad de huéspedes."}
                {step === 2 && "Completá tus datos para emitir la confirmación."}
                {step === 3 && "Elegí entre pagar el total o abonar solo la seña."}
                {step === 4 && "Tu operación fue registrada correctamente."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {step === 1 && (
                <>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Habitación</label>
                    <select
                      value={form.room}
                      onChange={(event) => onRoomChange(event.target.value)}
                      className="mt-1 w-full h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
                    >
                      {ROOM_CATALOG.map((room) => (
                        <option key={room.name} value={room.name}>
                          {room.name} ({formatCurrency(room.price)}/noche)
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Check-in</label>
                      <Input
                        type="date"
                        min={getTodayIso()}
                        value={form.checkIn}
                        onChange={(event) => setForm((prev) => ({ ...prev, checkIn: event.target.value }))}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Check-out</label>
                      <Input
                        type="date"
                        min={form.checkIn || getTodayIso()}
                        value={form.checkOut}
                        onChange={(event) => setForm((prev) => ({ ...prev, checkOut: event.target.value }))}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Huéspedes</label>
                    <select
                      value={form.guests}
                      onChange={(event) => setForm((prev) => ({ ...prev, guests: event.target.value }))}
                      className="mt-1 w-full h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
                    >
                      <option value="1">1 huésped</option>
                      <option value="2">2 huéspedes</option>
                      <option value="3">3 huéspedes</option>
                      <option value="4">4 huéspedes</option>
                    </select>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Nombre completo</label>
                    <Input
                      value={form.fullName}
                      onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
                      className="mt-1"
                      placeholder="Tu nombre y apellido"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Email</label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                        className="mt-1"
                        placeholder="nombre@correo.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Teléfono</label>
                      <Input
                        value={form.phone}
                        onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                        className="mt-1"
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Notas (opcional)</label>
                    <Input
                      value={form.notes}
                      onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
                      className="mt-1"
                      placeholder="Llegada tardía, preferencias, etc."
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
                    <p className="font-semibold flex items-center">
                      <ShieldCheck className="w-4 h-4 mr-2" />
                      Pago seguro
                    </p>
                    <p className="mt-1">Podés pagar el total o confirmar con una seña del 30%.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button
                      onClick={() => onPay("total")}
                      disabled={isPaying || total <= 0}
                      className="h-12 bg-slate-900 hover:bg-slate-800 text-white"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      {isPaying ? "Procesando..." : `Pagar total (${formatCurrency(total)})`}
                    </Button>
                    <Button
                      onClick={() => onPay("deposit")}
                      disabled={isPaying || deposit <= 0}
                      variant="outline"
                      className="h-12 border-amber-500 text-amber-700 hover:bg-amber-50"
                    >
                      <Landmark className="w-4 h-4 mr-2" />
                      {isPaying ? "Procesando..." : `Pagar seña (${formatCurrency(deposit)})`}
                    </Button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="rounded-lg border border-green-200 bg-green-50 p-5">
                  <p className="font-semibold text-green-900 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Reserva confirmada
                  </p>
                  <p className="text-green-800 mt-2 text-sm">
                    Registramos {paymentDone?.method === "deposit" ? "la seña" : "el pago completo"} por{" "}
                    <strong>{formatCurrency(paymentDone?.amount || 0)}</strong>. Te enviamos el comprobante por email.
                  </p>
                  <div className="mt-4">
                    <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
                      <Link href="/">Volver al home</Link>
                    </Button>
                  </div>
                </div>
              )}

              {step < 4 && (
                <div className="flex justify-between pt-3">
                  <Button variant="outline" onClick={() => setStep((prev) => Math.max(1, prev - 1))} disabled={step === 1}>
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Atrás
                  </Button>
                  {step === 1 && (
                    <Button onClick={() => setStep(2)} disabled={!canContinueStep1} className="bg-amber-600 hover:bg-amber-700">
                      Siguiente
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                  {step === 2 && (
                    <Button onClick={() => setStep(3)} disabled={!canContinueStep2} className="bg-amber-600 hover:bg-amber-700">
                      Ir al pago
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Resumen</CardTitle>
              <CardDescription>Se actualiza en tiempo real mientras avanzás.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Habitación</span>
                <span className="font-medium text-right">{form.room}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Tarifa</span>
                <span className="font-medium">{formatCurrency(form.nightlyRate)}/noche</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Noches</span>
                <span className="font-medium">{nights}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Huéspedes</span>
                <span className="font-medium">{form.guests}</span>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Impuestos (12%)</span>
                <span>{formatCurrency(taxes)}</span>
              </div>
              <div className="flex items-center justify-between text-base font-semibold">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
              <div className="rounded-md bg-amber-100 text-amber-900 px-3 py-2">
                Seña sugerida (30%): <strong>{formatCurrency(deposit)}</strong>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

export default function ReservarPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-50 py-12 px-4" />}>
      <ReservarWizard />
    </Suspense>
  )
}
