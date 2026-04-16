# Cuturama — Contrats d'API

---

## Types de base

```ts
type Category = "Concerts" | "Cinéma" | "Pèlerinage"

type PaymentMethod = "wave" | "orange" | "mtn" | "moov" | "visa" | "mastercard"

interface TicketType {
  id: string
  name: string    // ex: "VIP | 50.000 FCFA"
  price: number   // en FCFA, ex: 50000
}

interface CuturamaEvent {
  id: string
  slug: string
  title: string
  category: Category
  image: string
  location: string
  city: string
  date: string               // ex: "SAM. 25 AVR. 2026"
  time: string               // ex: "14H00 GMT"
  organizer: string
  organizerDescription?: string
  price: string              // chaîne d'affichage, ex: "25.000 FCFA"
  description?: string
  ticketTypes?: TicketType[]
  mapEmbedUrl?: string
}

interface CartItem {
  ticketTypeId: string
  quantity: number
}

interface PaymentInfo {
  method: PaymentMethod
  phone: string
  promo: string
}
```

---

## API 1 — Liste des événements

**`GET /cuturama/events?category=Concerts&page=1`**

```json
// RESPONSE
{
  "data": [
    {
      "id": "1",
      "slug": "concert-gospel-2026",
      "title": "Grand Concert Gospel",
      "category": "Concerts",
      "image": "https://...",
      "location": "Palais des Congrès",
      "city": "Abidjan",
      "date": "SAM. 25 AVR. 2026",
      "time": "14H00 GMT",
      "organizer": "Communauté Saint-Paul",
      "organizerDescription": "Description de l'organisateur...",
      "price": "25.000 FCFA",
      "description": "Description de l'événement...",
      "mapEmbedUrl": "https://www.google.com/maps/embed?..."
    }
  ],
  "total": 42,
  "page": 1,
  "itemsPerPage": 9
}
```

---

## API 2 — Détail d'un événement

**`GET /cuturama/events/:slug`**

Retourne un seul objet `CuturamaEvent` avec le champ `ticketTypes` inclus.

```json
// RESPONSE
{
  "id": "1",
  "slug": "concert-gospel-2026",
  "title": "Grand Concert Gospel",
  "category": "Concerts",
  "image": "https://...",
  "location": "Palais des Congrès",
  "city": "Abidjan",
  "date": "SAM. 25 AVR. 2026",
  "time": "14H00 GMT",
  "organizer": "Communauté Saint-Paul",
  "organizerDescription": "Description de l'organisateur...",
  "price": "25.000 FCFA",
  "description": "Description complète...",
  "mapEmbedUrl": "https://www.google.com/maps/embed?...",
  "ticketTypes": [
    { "id": "vvp",      "name": "VVP | 75.000 FCFA",  "price": 75000 },
    { "id": "vip",      "name": "VIP | 50.000 FCFA",  "price": 50000 },
    { "id": "normale",  "name": "Normale | 25.000 FCFA", "price": 25000 }
  ]
}
```

---

## API 3 — Création de commande

> Déclenchée à l'étape **Informations Aux Visiteurs → Paiement**

**`POST /cuturama/orders`**

```json
// REQUEST BODY
{
  "eventId": "1",
  "cart": [
    { "ticketTypeId": "vip",     "quantity": 2 },
    { "ticketTypeId": "normale", "quantity": 1 }
  ],
  "visitor": {
    "firstName": "Jean",
    "lastName": "Dupont",
    "email": "jean.dupont@email.com",
    "phone": "+225 0707070707"
  },
  "promoCode": "NOEL10",
  "paymentMethod": "wave"
}

// RESPONSE
{
  "orderId": "ord_abc123",
  "bookingRef": "CUT-X4F9Z2",
  "totalAmount": 125000,
  "discountAmount": 12500,
  "finalAmount": 112500,
  "status": "pending"
}
```

---

## API 4 — Initiation du paiement

> Déclenchée au clic sur **Payer** (étape Paiement)

**`POST /cuturama/orders/:orderId/pay`**

```json
// REQUEST BODY
{
  "paymentMethod": "wave",
  "phone": "+225 0707070707"
}

// RESPONSE
{
  "paymentUrl": "https://pay.wave.com/...",
  "transactionId": "txn_xyz789",
  "status": "initiated"
}
```

---

## API 5 — Statut / Confirmation de commande

> Pollingou webhook — donne les données à afficher à l'étape **Confirmation**

**`GET /cuturama/orders/:orderId/status`**

```json
// RESPONSE
{
  "orderId": "ord_abc123",
  "bookingRef": "CUT-X4F9Z2",
  "status": "confirmed",
  "qrCodeUrl": "https://.../qr/CUT-X4F9Z2.png",
  "tickets": [
    {
      "ticketId": "tkt_001",
      "ticketType": "VIP",
      "holderName": "Jean Dupont",
      "qrCode": "<base64 ou URL>"
    }
  ]
}
```

`status` peut être : `"pending"` | `"confirmed"` | `"failed"`

---

## API 6 — Contacter l'organisateur

**`POST /cuturama/events/:slug/contact`**

```json
// REQUEST BODY
{
  "firstName": "Jean",
  "lastName": "Dupont",
  "email": "jean.dupont@email.com",
  "message": "Bonjour, je voudrais plus d'informations..."
}

// RESPONSE
{
  "success": true,
  "message": "Votre message a bien été envoyé."
}
```

---

## Notes importantes

- Le `bookingRef` (ex: `CUT-X4F9Z2`) et le QR code sont **actuellement générés côté client** (fake). Ils doivent venir de l'API (réponse des endpoints 3 ou 5).
- La réduction promo est actuellement hardcodée à **10%** côté front. La logique de calcul doit être côté API.
- Les images des méthodes de paiement sont dans `/public/assets/cuturama/mobile/` : `wave.png`, `orange.png`, `mtn.png`, `moov.png`, `visa.png`, `mastercard.png`.
