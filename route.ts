import { NextRequest } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  return new Response('ok')
}