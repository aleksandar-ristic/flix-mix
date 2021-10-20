import React from 'react'
import { Accordion } from '../components'
import OptForm from '../components/opt-form'
import faqData from '../fixtures/faqs.json'

export default function FaqContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{faqData.map(item => (
				<Accordion.Item key={item.id}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}
			<OptForm>
				<OptForm.Input placeholder='Email address' />
				<OptForm.Button>Try it now</OptForm.Button>
				<OptForm.Break />
				<OptForm.Text>
					Ready to watch? Enter your email to create or restart your membership
				</OptForm.Text>
			</OptForm>
		</Accordion>
	)
}
