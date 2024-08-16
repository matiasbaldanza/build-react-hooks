import { expect, testStep } from '@epic-web/workshop-utils/test'
import { screen, waitFor } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'

await import('.')

const counterButton = await testStep(
	({ type }) =>
		type === 'fail'
			? 'Could not find the counter button. It should start at 0. Did you forget to return the initial state from your useState?'
			: 'Found the counter button that starts at 0',
	() => screen.findByRole('button', { name: /0/i }),
)
await userEvent.click(counterButton)
await testStep(
	`The button text should still be 0 after clicking because our useState isn't working yet`,
	() => waitFor(() => expect(counterButton).to.have.text('0')),
)