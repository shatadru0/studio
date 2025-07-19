# SkillSwap Hub

> A community-based skill trading platform where time is currency

SkillSwap Hub is a platform built for communities who believe in the power of sharing knowledge and skills. Instead of money, we use time as currency - spend an hour teaching someone guitar, and earn an hour to learn photography from someone else. It's that simple.

## What makes this different

We're tired of platforms that commoditize human connections. SkillSwap Hub is built around the idea that everyone has something valuable to offer, and everyone has something they want to learn. By using time as currency, we create a more equitable way for people to access knowledge and skills.

## Core Features

**Authentication & Community**
- Secure email-based authentication with verification
- Invitation-only system where existing members vouch for newcomers
- Rich profiles that showcase skills and build trust

**The Marketplace**
- Browse services by location, category, skill level, and community ratings
- Interactive maps to find skills being offered nearby
- Detailed service pages with transparent pricing and provider backgrounds

**Time-Credit System**
- Simple 1:1 exchange: 1 hour of your expertise = 1 hour of credit
- Automatic credit transfers when services are completed
- Transaction history to track your community contributions
- New members start with credits to get involved immediately

**Booking & Communication**
- Straightforward booking system with calendar integration
- Real-time messaging between community members
- File sharing for project materials and resources
- Booking-specific conversations to keep everything organized

**Community Trust**
- Honest review system based on completed exchanges
- Reputation scores that reflect reliability and quality
- Transparent feedback that helps everyone improve

**Personal Dashboard**
- Track your credit balance and transaction history
- Manage your service offerings and bookings
- See your community impact and connections

## Built With

This platform is built on modern, reliable technologies that prioritize security and user experience:

- **Frontend**: Next.js 14 with TypeScript for type safety and performance
- **Styling**: Tailwind CSS with shadcn/ui components for consistent, accessible design
- **Backend**: Next.js API routes for seamless full-stack development
- **Database**: Supabase PostgreSQL with Row Level Security for data protection
- **Real-time Features**: Supabase Realtime for instant messaging and updates
- **Authentication**: Supabase Auth for secure user management
- **File Storage**: Supabase Storage for profile photos and shared files
- **State Management**: Zustand for predictable state handling
- **Forms & Validation**: React Hook Form with Zod for robust form handling
- **Maps**: Google Maps API for location-based features
- **Deployment**: Vercel for reliable hosting and CI/CD

## Getting Started

### What you'll need

- Node.js 18 or higher
- A Supabase account (free tier works fine)
- Google Maps API key
- Your favorite package manager (npm, yarn, or pnpm)

### Setting up locally

1. **Get the code**
   ```bash
   git clone https://github.com/your-username/skillswap-hub.git
   cd skillswap-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your environment**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
   
   Then fill in your credentials:
   ```env
   # Get these from your Supabase project dashboard
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

   # Google Maps API key for location features
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key

   # Basic app configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Set up your database**
   ```bash
   # Apply database migrations
   npx supabase db push
   
   # Add some initial data
   npx supabase db seed
   ```

5. **Start developing**
   ```bash
   npm run dev
   ```

   Your local SkillSwap Hub will be running at [http://localhost:3000](http://localhost:3000)

## How the code is organized

We've structured this project to be easy to navigate and contribute to:

```
skillswap-hub/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/            # Login, registration, profile setup
│   │   ├── dashboard/         # User dashboard and settings
│   │   ├── marketplace/       # Browse and search services
│   │   ├── bookings/         # Manage bookings and transactions
│   │   ├── messages/         # Real-time messaging
│   │   └── api/              # Backend API endpoints
│   ├── components/
│   │   ├── ui/               # Reusable UI components (buttons, forms, etc.)
│   │   ├── forms/            # Specific form components
│   │   ├── layout/           # Navigation, headers, footers
│   │   └── common/           # Shared utility components
│   ├── lib/
│   │   ├── supabase/         # Database utilities and queries
│   │   ├── validations/      # Input validation schemas
│   │   └── hooks/            # Custom React hooks
│   ├── stores/               # Global state management
│   ├── types/                # TypeScript type definitions
│   └── constants/            # App-wide constants
├── supabase/
│   ├── migrations/           # Database schema changes
│   └── seed.sql             # Sample data for development
└── public/                  # Static files (images, icons, etc.)
```

## Security and Trust

Building a community platform means taking security seriously. Here's how we protect our users:

- **Row Level Security (RLS)** ensures users can only access their own data and public information
- **Input validation** with Zod schemas prevents malicious data from entering the system
- **Authentication middleware** protects sensitive routes and API endpoints
- **Rate limiting** prevents abuse of API endpoints
- **HTTPS enforcement** and security headers protect data in transit
- **Input sanitization** prevents cross-site scripting (XSS) attacks

## Testing

We believe in shipping reliable code:

```bash
# Run the full test suite
npm run test

# Test user interactions end-to-end
npm run test:e2e

# Test individual components
npm run test:components
```

## Deploying to Production

**Using Vercel (recommended)**

1. Connect your GitHub repository to Vercel
2. Configure your environment variables in the Vercel dashboard
3. Deploy automatically on every push to main

**Manual deployment**

```bash
# Build the production version
npm run build

# Start the production server
npm run start
```

## Contributing

We welcome contributions from developers who share our vision of community-driven skill sharing. Whether you're fixing a bug, adding a feature, or improving documentation, your help makes this platform better for everyone.

**Getting started with contributions:**

1. Fork this repository
2. Create a branch for your changes (`git checkout -b feature/your-improvement`)
3. Make your changes and test them thoroughly
4. Commit with a clear message (`git commit -m 'Add ability to filter by skill level'`)
5. Push your changes (`git push origin feature/your-improvement`)
6. Open a Pull Request with a description of what you've changed and why

Please read our [Contributing Guide](CONTRIBUTING.md) for more details on our development process, coding standards, and how to get your changes reviewed and merged.

## Getting Help

**For Users:**
- Check our [documentation](https://docs.skillswaphub.com) for guides and tutorials
- Join our [community Discord](https://discord.gg/skillswaphub) to connect with other users
- Email us at support@skillswaphub.com for account or platform issues

**For Developers:**
- Browse [existing issues](https://github.com/your-username/skillswap-hub/issues) or create a new one
- Join our Discord's #developers channel for technical discussions
- Check out our [API documentation](https://docs.skillswaphub.com/api) for integration details

## License

This project is open source under the MIT License. See the [LICENSE](LICENSE) file for the full text.

## Acknowledgments

This platform exists because of the incredible work done by:

- The [Supabase](https://supabase.com/) team for creating an amazing backend-as-a-service platform
- [shadcn](https://twitter.com/shadcn) for the beautiful and accessible UI component library
- [Vercel](https://vercel.com/) for making deployment and hosting seamless
- Our community of early users who provided feedback and helped shape the platform

Most importantly, thank you to everyone who believes in sharing knowledge and skills to build stronger communities.

---

**[Try SkillSwap Hub](https://skillswap-hub.vercel.app)** • **[Read the Docs](https://docs.skillswaphub.com)** • **[Join our Community](https://discord.gg/skillswaphub)**

Built with care by people who believe in the power of community.
