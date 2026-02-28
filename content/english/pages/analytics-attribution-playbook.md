---
title: "Analytics and Attribution Playbook"
meta_title: "Aegisoft Analytics and Attribution Playbook"
description: "GA4 event and attribution model for consultation, guides, case studies, and AI referral visibility."
url: "/analytics-attribution-playbook/"
draft: false
---

## GA4 events implemented

- `consultation_cta_click`
- `offer_cta_click`
- `scheduler_open`
- `contact_form_submit_attempt`
- `contact_form_submit_success`
- `resource_download_cta_click`
- `case_study_cta_click`
- `answer_hub_cta_click`

## Recommended AI referral channel grouping

Maintain a custom channel definition grouping traffic from domains commonly used by AI assistants and answer engines. Review monthly.

Suggested includes:

- `chatgpt.com`
- `openai.com`
- `perplexity.ai`
- `gemini.google.com`
- `claude.ai`

## Funnel reporting views

- Guide page -> Offer CTA click -> Scheduler open -> Contact submit success
- Case study page -> Consultation CTA click -> Scheduler open
- Blog post -> Guide click -> Offer click -> Conversion
