'use client'

import { useActionState } from 'react'
import { unlock, type UnlockState } from '@/app/unlock/actions'

const initialState: UnlockState = { error: null }

export function UnlockForm({ next }: { next: string }) {
  const [state, formAction, pending] = useActionState(unlock, initialState)

  return (
    <form className="unlock-form" action={formAction}>
      <input type="hidden" name="next" value={next} />
      <label className="unlock-label" htmlFor="password">Password</label>
      <div className="unlock-row">
        <input
          id="password"
          name="password"
          type="password"
          className="unlock-input"
          autoComplete="current-password"
          autoFocus
          required
          aria-invalid={Boolean(state.error)}
          aria-describedby={state.error ? 'unlock-error' : undefined}
        />
        <button className="case-cta unlock-submit" type="submit" disabled={pending}>
          {pending ? 'Checking…' : 'View project'}
        </button>
      </div>
      <p id="unlock-error" className="unlock-error" role="alert">{state.error}</p>
    </form>
  )
}
