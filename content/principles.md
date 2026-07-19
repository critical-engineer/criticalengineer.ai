# The Critical Engineer Principles

*The reference-card version of [the essay](/). Signed, not anonymous: these are my working beliefs, revised in public as better arguments arrive.*

Engineering should organise itself around its scarce resource. AI has changed where that scarcity lies: expression has become cheap, and judgment has not.

**1. Code is the expression of engineering decisions, not the primary locus of engineering effort.**
Reasoning builds theory; theory guides decisions; decisions produce implementation; implementation feeds back into reasoning. AI compresses one phase of that cycle — expression — far more than the others. An engineer's output is not lines of code, PRs raised, or tickets closed. Those are artifacts of the work, not the work.

**2. The critical thinker is not just in the loop — they are the loop.**
Models produce fluent, idiomatic code at speed, and fluent output can be subtly wrong in ways that look entirely right. Whatever models become capable of, accountability for the consequences of engineering decisions remains human. Delegating expression does not delegate ownership of correctness.

**3. The dividing line is: who owns correctness?**
At one end, an engineer accepts model output by feel until something works. At the other, their attention is concentrated at every point of leverage: problem framing, design, implementation review, validation. The difference is not which tools are used or how heavily. It is who owns the judgment that establishes and verifies correctness.

**4. Standardise interfaces, not implementations.**
Goals, plans, decisions, and validation criteria are shared, because they require coordination. Editors, AI tools, prompting styles, and working rhythms are personal, because they don't. Mandating implementation-level uniformity buys management legibility at the cost of performance. Autonomy at the implementation layer is sustainable precisely because the coordination layer has agreed interfaces.

**5. The plan, not the ticket, is the unit of coordination.**
A plan is a unit of reasoning: a problem understood, constraints identified, decisions made and justified. Plans can be reviewed, challenged, and improved by colleagues, and they accumulate the organisation's understanding of its own systems. Tickets coordinate execution. When execution is cheap and reasoning is scarce, coordinating around tickets is coordinating around the wrong object. Plans evolve — in incident response and research the plan emerges from the work, and that is expected.

**6. Status should be derived, not reported.**
If the artifacts of work — plans, decisions, validation results — are machine-readable, status can be inferred from them at whatever resolution a stakeholder needs. If engineers maintain two representations of reality, the work and the tracker, one of them will drift. Review effort, likewise, should be proportional to reasoning risk, not diff size: a one-line change to a core assumption deserves more scrutiny than a hundred lines of boilerplate.

**7. The team is a theory-building system, not a delivery machine.**
Following Naur: a program is not its source code; it is the theory alive in the minds of the people who understand it. Code produced without shared theory is orphaned — it works until it doesn't, and then nobody can fix it. The highest-performing team under this model is one where the theory of each subsystem is distributed, challenged, and alive across multiple engineers. That is also what makes individual autonomy safe.

---

**Scope, honestly stated.** These principles assume systems where being subtly wrong is expensive. For short-lived, low-stakes software, fast and shallowly-understood may be the right trade. The boundary between the two regimes is a judgment call, and it should be made deliberately.

**A test for revisions.** If AI became significantly more capable, would this still be true? Claims that survive that question are the ones worth keeping.

*Object, extend, or sharpen these in the [repository](https://github.com/criticalengineer). — [Your Name]*
