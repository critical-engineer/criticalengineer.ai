# The Critical Engineer Principles

*The reference-card version of [the essay](/). Signed, not anonymous: these are my working beliefs, revised in public as better arguments arrive.*

Engineering should organise itself around its scarce resource. AI has changed where that scarcity lies: expression has become cheap, and judgement has not.

**1. Code is the expression of engineering decisions, not the primary locus of engineering effort.**
Reasoning builds theory; theory guides decisions; decisions produce implementation; implementation feeds back into reasoning. AI compresses one phase of that cycle, expression, far more than the others. An engineer's output is not lines of code, PRs raised, or tickets closed. Those are artefacts of the work, not the work.

**2. The critical thinker is not just in the loop, they are the loop.**
Models produce fluent, idiomatic code at speed, and fluent output can be subtly wrong in ways that look entirely right. Whatever models become capable of, accountability for the consequences of engineering decisions remains human. Delegating expression does not delegate ownership of correctness.

**3. Correctness is layered, and accountability is too.**
An implementation can be correct against a plan while the plan is wrong for the intent, and the intent fails the actual need. Even with an accountable owner for each layer, a team might still ship the wrong thing because they never check the chain end to end: they verify thoroughly, just in the wrong direction. The question is therefore not only who owns correctness at each layer, but who owns the transitions between them: who confirms that the plan faithfully expresses the intent, and that the implementation faithfully expresses the plan. Every transition is its own hat, and accountability follows the hat, not the job title.

**4. Standardise interfaces, not implementations.**
Goals, plans, decisions, and validation criteria are shared, because they require coordination. Editors, AI tools, prompting styles, and working rhythms are personal, because they don't. Mandating implementation-level uniformity buys management legibility at the cost of performance. Autonomy at the implementation layer is sustainable precisely because the coordination layer has agreed interfaces. "Shared" has quietly meant shared within engineering, while the interface that most needs standardising is the one leaving it. What crosses that boundary is a view derived from the plan, in the language of whoever is accountable on the other side. The plan does not have to be legible to everyone; the derived view does. Deriving is not neutral: what a view selects and omits are decisions, and those decisions have an owner. A handover document announces itself as secondary; a lossy derived view looks like the real thing.

**5. The plan, not the ticket, is the unit of coordination.**
A plan is a unit of reasoning: a problem understood, constraints identified, decisions made and justified. Plans can be reviewed, challenged, and improved by colleagues, and they accumulate the organisation's understanding of its own systems. Review does not always converge: some disagreement is a gap to resolve, some is a fork, where the constraints do not settle the question and both readings survive scrutiny. A fork should be retained in the plan rather than collapsed into consensus: two defensible readings held side by side with their provenance. Where a decision is required, disagree-and-commit is how you decide, not how you erase. Tickets coordinate execution. When execution is cheap and reasoning is scarce, coordinating around tickets is coordinating around the wrong object. Plans evolve; in incident response and research the plan emerges from the work, and that is expected.

**6. Status should be derived, and so should its confidence.**
Status is derived from the artefacts of work: plans, decisions, validation results, at whatever resolution a stakeholder needs. Each artefact has its own state (draft, emergent, agreed, contested, superseded) and falsification conditions, and state changes should be attributable or supersede the previous artefact, never silently overwrite it. A status representation can then fail in one of two ways: by losing information, compressing mixed-confidence reality into a flat, unverifiable surface, or by drifting from the reality it reports. Carried confidence protects against the first; derivation and supersession against the latter. Both are necessary for status to remain trustworthy. Review effort should likewise be proportional to reasoning risk, not diff size: a one-line change to a core assumption deserves more scrutiny than a hundred lines of boilerplate.

**7. The team is a theory-building system, not a delivery machine.**
Following Naur: a program is not its source code; it is the theory alive in the minds of the people who understand it. Code produced without shared theory is orphaned, it works until it doesn't, and then nobody can fix it. The highest-performing team under this model is one where the theory of each subsystem is distributed, challenged, and alive across multiple engineers. That is also what makes individual autonomy safe.

---

**Scope, honestly stated.** These principles assume systems where being subtly wrong is expensive. For short-lived, low-stakes software, fast and shallowly-understood may be the right trade. The boundary between the two regimes is a judgement call, and it should be made deliberately.

**A test for revisions.** If AI became significantly more capable, would this still be true? Claims that survive that question are the ones worth keeping.

*Object, extend, or sharpen these in the [repository](https://github.com/critical-engineer/criticalengineer.ai).*

Collaborators:

- [Dries Samyn](https://www.linkedin.com/in/dries-samyn/) - https://github.com/driessamyn
- [Sebastian Bohle] (https://www.linkedin.com/in/sebastian-bohle/) - https://github.com/sebb001
