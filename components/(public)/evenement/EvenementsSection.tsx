"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { getEvents } from "@/lib/event-api"


interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  image: string
}

export default function EvenementsSection() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents()
        setEvents(data.events || mockEvents)
      } catch (error) {
        console.error("Failed to fetch events:", error)
        setEvents(mockEvents)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const mockEvents: Event[] = [
    {
      id: "1",
      title: "Groupe d'étude biblique hebdomadaire",
      description: "Rejoignez-nous pour une étude approfondie des Écritures.",
      date: "2024-02-02",
      time: "18:00",
      image: "/people-studying-bible-together.jpg",
    },
    {
      id: "2",
      title: "Jeunes Adultes Connect",
      description: "Un espace pour les jeunes adultes de se connecter et grandir dans la foi.",
      date: "2024-02-06",
      time: "19:00",
      image: "/young-adults-church-group.jpg",
    },
    {
      id: "3",
      title: "Rassemblement de prière en milieu de semaine",
      description: "Moment de prière et de réflexion en milieu de semaine.",
      date: "2024-02-20",
      time: "18:30",
      image: "/prayer-meeting-church.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">ÉVÉNEMENTS À VENIR</h2>

        <div className="space-y-6 mb-12">
          {events.map((event, index) => (
            <Card key={event.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-20 bg-primary text-white flex flex-col items-center justify-center p-4">
                    <div className="text-2xl font-bold">{new Date(event.date).getDate()}</div>
                    <div className="text-sm">
                      {new Date(event.date).toLocaleDateString("fr-FR", { month: "short" })}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row">
                    <div className="md:w-32 h-32 md:h-auto">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-2">{event.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {event.time}
                        </div>
                      </div>
                      <Link href={`/evenements/${event.id}`}>
                        <Button variant="outline">DÉTAILS</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}