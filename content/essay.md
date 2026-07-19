# The Critical Engineer

*By [Dries Samyn](https://www.linkedin.com/in/dries-samyn/), July 2026*

I have been a software engineer for 27 years. In the past year the way I work has changed more than at any other point in my career. I barely write code anymore. I still do all of the engineering.

That distinction is what this essay is about.

## How I actually work now

I write plans. Before any code exists, I spend real time, sometimes hours, writing down the problem, the constraints, the failure modes, the design decisions and the reasoning behind them, the alternatives I considered and rejected. I iterate on that plan, and increasingly I use an LLM to challenge it before a human ever sees it.

Then I hand the plan to an LLM to implement, in logical chunks. I review each chunk, but not the way I used to review a colleague's PR. I interrogate it. When something in the output looks unexpected, I ask why before I accept it. Sometimes the model found a better approach than my plan anticipated, and the plan gets updated. Sometimes it made an assumption the plan never sanctioned, and the implementation gets corrected. I need to know which, every time, because both change my understanding of the system.

I often run several plans in parallel. Validation happens against the original constraints, not just the tests, because tests can pass while the system is still wrong for reasons the tests never simulated.

Here is the thing I keep bumping into: almost nothing around me supports working this way. The tickets, the boards, the standups, the velocity metrics. All of it was built for a world where writing code was the expensive part. I spend my most valuable hours on plans and reviews, and then I spend additional, entirely wasted hours translating that work into ticket-shaped status updates so the organisation can see it.

## The claim

The software development lifecycle we all run was designed around a specific scarcity: expression. Translating human understanding into working code was slow, error-prone and expensive, so everything, process, tooling, team structure, performance measurement, was built to manage that.

AI has compressed expression dramatically. I can produce in an afternoon what used to take me a week. But the systems built to manage the old bottleneck have not moved. They still optimise for code production as though that is what is scarce.

It isn't, anymore. What is scarce is the attention required to think clearly about what should be built, why, and whether what was built actually achieves it. Knowing that the requirement is wrong. Recognising that a correct implementation of a flawed design will cause harm at scale. Noticing that a concurrency assumption holds in tests but will fail under production load. An LLM produces fluent, idiomatic, well-structured code at speed, and it can be subtly wrong in ways that look entirely right. There is no compiler error for a misapplied consistency model.

So my claim is this: engineering should organise itself around its scarce resource, and AI has changed where that scarcity lies. I call the engineer who works this way, owning the judgment and delegating the expression, the _Critical Engineer_. Not critical as in complaining. Critical as in critical thinking: the person who decides, validates and owns the consequences. The AI executes. The engineer is not just in the loop; for all the decisions that matter, they *are* the loop.

## Where this sits next to spec-driven development

I am not the first person to notice the bottleneck moved. The [DORA report](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report) now says plainly that as AI accelerates code generation, the constraint shifts to specification and verification. Spec-driven development has become a named movement with real tooling behind it, [GitHub's spec-kit](https://github.com/github/spec-kit), [OpenSpec](https://openspec.dev), and others. [Addy Osmani has published a workflow](https://addyosmani.com/blog/ai-coding-workflow/) that overlaps heavily with mine: detailed specs before code, small testable chunks, review everything.

I agree with most of it, and this essay stands on that work rather than beside it. But I think SDD as currently practised answers a narrower question than the one I care about. SDD is a workflow discipline: how one engineer gets reliable output from a model. The spec is an input artefact, you write it so the generation goes well.

My claim is organisational. The plan is not just a better prompt. It is the natural **unit of coordination for a team**, the thing that gets reviewed, challenged and improved by colleagues; the thing that accumulates the reasoning behind the system; the thing from which status should be *derived* rather than separately reported. Tasks and tickets coordinate execution. Plans coordinate reasoning. When execution is cheap and reasoning is scarce, coordinating around tickets is coordinating around the wrong object.

That is the part I find genuinely underserved, in both the discourse and the tooling.

## Why this matters more than it looks: theory building

In [1985 Peter Naur argued that a program is not its source code](https://pages.cs.wisc.edu/~remzi/Naur.pdf). The real artefact of programming is the theory, the mental model held by the people who built it, of how the system works, why it is shaped the way it is, and how it can change without coming apart. Source code is a lossy representation of that theory. When the people who hold the theory leave, the program effectively dies, whatever the documentation says.

I think Naur's insight is the strongest argument for everything in this essay, and it has become more consequential, not less, now that implementation can be delegated. A codebase where most decisions were *accepted* rather than *made* is a codebase where nobody can answer the question: why is it like this? It works until conditions change, and then the debugging starts from zero, because the theory was never built.

Vibe coding is not a new failure mode. In 2003 it was pasting from Stack Overflow; in 2018 it was cargo-culting framework patterns; today it is accepting model output by feel until something works. What is new is the fluency. The old signals that something was wrong, alien idioms, awkward structure, obvious copy-paste seams, are gone. The code looks like a competent engineer wrote it.

The plan-first workflow is, at bottom, deliberate theory building. The plan is not the theory; it is how you start building one, and it is the trace that lets a colleague, or you six months later mid-incident, rebuild it fast.

## What I am not claiming

I want to be careful here, because the strongest objections to this essay are ones I partly agree with.

**This is not universal.** Everything above assumes systems where being subtly wrong is expensive: systems that handle money, safety, scale or long lifetimes. That describes my work and a lot of professional software engineering. It does not describe all of it. For a genuinely large share of software, internal tools, prototypes, short-lived features, fast and shallowly-understood code plus cheap regeneration may be the economically correct choice. I think the boundary between those regimes is one of the most important judgement calls an engineering leader now makes, and most are making it by default rather than on purpose.

**Verification is not free.** Interrogating every consequential decision a model makes costs attention, and reading code critically has always been harder than writing it. If model output keeps accelerating, the Critical Engineer risks becoming a choke point in front of an arbitrarily fast generator. I don't have a complete answer. In practice I triage: the depth of interrogation scales with the blast radius of the decision, and I lean on the model itself to generate the adversarial tests I would once have written by hand. Whether that scales for a whole team is an open question, and I would distrust anyone who claims to have settled it.

**Better models will eat some of this.** Some of the judgement I describe, spotting the unsafe concurrency assumption, noticing the unencoded business constraint, will increasingly be within model reach. What I don't believe gets automated is accountability. When a system fails at scale, someone is responsible, and that someone cannot be a model. But I will concede that accountability without genuine epistemic contribution is a thin thing, and if verification hollows out entirely, this essay's model hollows out with it. My working test for any claim in here: if AI became significantly more capable, would this still be true? The claims about theory, coordination and accountability pass. Some claims about day-to-day review mechanics may not, and I expect to revise them.

**The apprenticeship problem is real and I cannot solve it.** My judgement was formed by decades of wrestling with implementation, debugging race conditions at 2am, building abstractions and watching them break. If expression is delegable from day one, where does the next generation's judgement come from? I don't think the answer is withholding AI from juniors; that ship has sailed and it would be dishonest besides. I suspect the answer looks like deliberately pointing early-career attention at validation, adversarial testing and theory-building rather than boilerplate. But I genuinely don't know, and I think anyone building an engineering organisation right now should be far more worried about this than about their AI tool spend.

## What follows, if this is right

A few consequences I am fairly confident about, stated briefly. I have written them up as a separate, terser [principles page](/principles) for people who want the argument in reference-card form.

Plans, not tickets, should be the unit at which engineering work is coordinated, reviewed and evaluated. Status should be derived from the artefacts of work, not manually reported alongside it; if engineers maintain two representations of reality, one of them will drift. Review effort should be proportional to reasoning risk, not diff size. And hiring should weight how someone reasons about a system under uncertainty, and how their judgement holds up when the model is confidently wrong, over how fast they produce code, because that second question has stopped discriminating.

## A disclosure, and an invitation

The ideas here came out of my own frustration, and that frustration has a practical edge: I hope to build or contribute to tooling that supports this way of working, in particular collaborative planning as a first-class object, with status derived from it rather than reported around it.

Everything on this site lives in a public repository. If you have a reasoned objection, a sharper counter-example, or experience running a team this way, I want to hear it. The discussion board is open, and the essay will be revised in public when someone changes my mind. That seems like the least a piece of writing about critical thinking can do.

---

*[Dries Samyn](https://www.linkedin.com/in/dries-samyn/) is a software engineer. Opinions here are personal.*
