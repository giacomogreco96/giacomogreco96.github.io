/* ==========================================================================
   Publication data
   -------------------------------------------------------------------------
   Edit this array to add, remove or correct publications. Each entry:
     status   : "preprint" | "published"  (controls the small tag colour)
     authors  : string
     title    : string
     venue    : string (HTML allowed, e.g. "<strong>Bernoulli</strong> 32(3)...")
     journal  : URL to journal/DOI page, or null if not available yet
     arxiv    : URL to arXiv abstract page, or null
     abstract : plain text shown in the pop-up
     bibtex   : BibTeX entry shown (and copyable) in the pop-up
   ========================================================================== */
const PUBLICATIONS = [
  {
    status: "preprint",
    authors: "G. Greco, D. Marinucci",
    title: "Sparsity for isotropic spherical random fields",
    venue: "arXiv:2601.21535 (01/2026) — accepted in a special issue of <strong>Theory of Probability and Mathematical Statistics</strong>",
    journal: null,
    arxiv: "https://arxiv.org/abs/2601.21535",
    abstract: "We introduce a simple representation for isotropic spherical random fields and we discuss how it allows to discuss different notions of sparsity under isotropy. We also show how a suitable construction of sparse fields can mimic well the angular power spectrum and the polyspectra of some popular non-Gaussian fields, at the same time allowing for computationally efficient simulation algorithms. Using related ideas we also show how it is possible to obtain sparse approximations of spherical random fields which preserve isotropy, thus addressing an issue which has been raised in the Cosmological literature.",
    bibtex:
`@article{GrecoMarinucci2026sparsity,
  author  = {Greco, Giacomo and Marinucci, Domenico},
  title   = {Sparsity for isotropic spherical random fields},
  journal = {Theory of Probability and Mathematical Statistics (special issue), to appear},
  year    = {2026},
  eprint  = {2601.21535},
  archivePrefix = {arXiv},
  primaryClass  = {math.PR}
}`
  },
  {
    status: "preprint",
    authors: "G. Greco",
    title: "A Malliavin-Gamma calculus approach to Score Based Diffusion Generative models for random fields",
    venue: "arXiv:2505.13189 (05/2025) — accepted in the INdAM-Springer volume <strong>Analysis and Geometry of Random Fields</strong>",
    journal: null,
    arxiv: "https://arxiv.org/abs/2505.13189",
    abstract: "We adopt a Gamma and Malliavin Calculi point of view in order to generalize Score-based diffusion Generative Models (SGMs) to an infinite-dimensional abstract Hilbertian setting. Particularly, we define the forward noising process using Dirichlet forms associated to the Cameron-Martin space of Gaussian measures and Wiener chaoses; whereas by relying on an abstract time-reversal formula, we show that the score function is a Malliavin derivative and it corresponds to a conditional expectation. This allows us to generalize SGMs to the infinite-dimensional setting. Moreover, we extend existing finite-dimensional entropic convergence bounds to this Hilbertian setting by highlighting the role played by the Cameron-Martin norm in the Fisher information of the data distribution. Lastly, we specify our discussion for spherical random fields, considering as source of noise a Whittle-Matérn random spherical field.",
    bibtex:
`@incollection{Greco2025malliavin,
  author    = {Greco, Giacomo},
  title     = {A Malliavin-Gamma calculus approach to Score Based Diffusion Generative models for random fields},
  booktitle = {Analysis and Geometry of Random Fields},
  series    = {INdAM Series},
  publisher = {Springer},
  year      = {2025},
  note      = {To appear},
  eprint    = {2505.13189},
  archivePrefix = {arXiv},
  primaryClass  = {math.PR}
}`
  },
  {
    status: "published",
    authors: "G. Greco, L. Tamanini",
    title: "Hessian stability and convergence rates for entropic and Sinkhorn potentials via semiconcavity",
    venue: "<strong>Bernoulli</strong> 32(3): 2351–2378 (August 2026)",
    journal: "https://doi.org/10.3150/25-BEJ1956",
    arxiv: "https://arxiv.org/abs/2504.11133",
    abstract: "In this paper we determine quantitative stability bounds for the Hessian of entropic potentials, i.e., the dual solution to the entropic optimal transport problem. To the authors’ knowledge this is the first work addressing this second-order quantitative stability estimate in general unbounded settings. Our proof strategy relies on semiconcavity properties of entropic potentials and on the representation of entropic transport plans as laws of forward and backward diffusion processes, known as Schrödinger bridges. Moreover, our approach allows to deduce a stochastic proof of quantitative stability estimates for entropic transport plans and for gradients of entropic potentials as well. Finally, as a direct consequence of these stability bounds, we deduce exponential convergence rates for gradient and Hessian of Sinkhorn iterates along Sinkhorn’s algorithm, a problem that was still open in unbounded settings. Our rates have a polynomial dependence on the regularization parameter.",    
    bibtex:
`@article{GrecoTamanini2026hessian,
  author  = {Greco, Giacomo and Tamanini, Luca},
  title   = {Hessian stability and convergence rates for entropic and {S}inkhorn potentials via semiconcavity},
  journal = {Bernoulli},
  volume  = {32},
  number  = {3},
  pages   = {2351--2378},
  year    = {2026},
  doi     = {10.3150/25-BEJ1956}
}`
  },
  {
    status: "preprint",
    authors: "A. Chiarini, G. Conforti, G. Greco, L. Tamanini",
    title: "A semiconcavity approach to stability of entropic plans and exponential convergence of Sinkhorn's algorithm",
    venue: "arXiv:2412.09235 (12/2024) — accepted in <strong>Annals of Probability</strong>",
    journal: null,
    arxiv: "https://arxiv.org/abs/2412.09235",
    abstract: "We study stability of optimizers and convergence of Sinkhorn's algorithm for the entropic optimal transport problem. In the special case of the quadratic cost, our stability bounds imply that if one of the two entropic potentials is semiconcave, then the relative entropy between optimal plans  is controlled by the squared Wasserstein distance between their marginals.  When employed in the analysis of Sinkhorn's algorithm, this result gives a natural sufficient condition for its exponential convergence, which does not require the ground cost to be bounded. By controlling from above the Hessians of Sinkhorn potentials in examples of interest, we obtain new exponential convergence results. For instance, for the first time we obtain exponential convergence for log-concave marginals and quadratic costs for all values of the regularization parameter, based on semiconcavity propagation results. Moreover, the convergence rate has a linear dependence on the regularization: this behavior is sharp and had only been previously  obtained for compact distributions  `Chizat et al. (2025)'.  These optimal rates are also established in situations where one of the two marginals does not have sub-Gaussian tails. Other interesting new applications include  subspace elastic costs, weakly log-concave marginals, smooth marginals with light tails (where, under reinforced assumptions, we manage to improve the dependence on the regularization in the exponential rates obtained in `Eckstein (2025)'), the case of Lipschitz costs with bounded Hessian, and compact Riemannian manifolds.",    
    bibtex:
`@article{ChiariniConfortiGrecoTamanini2024semiconcavity,
  author  = {Chiarini, Alberto and Conforti, Giovanni and Greco, Giacomo and Tamanini, Luca},
  title   = {A semiconcavity approach to stability of entropic plans and exponential convergence of {S}inkhorn's algorithm},
  journal = {Annals of Probability},
  year    = {2024},
  note    = {To appear},
  eprint  = {2412.09235},
  archivePrefix = {arXiv},
  primaryClass  = {math.PR}
}`
  },
  {
    status: "preprint",
    authors: "G. Conforti, A. Durmus, G. Greco",
    title: "Quantitative contraction rates for Sinkhorn's algorithm: beyond bounded costs and compact marginals",
    venue: "arXiv:2304.04451 (04/2023) — accepted in <strong>Annals of Applied Probability</strong>",
    journal: null,
    arxiv: "https://arxiv.org/abs/2304.04451",
    abstract: "We show non-asymptotic exponential convergence of Sinkhorn iterates to the Schrödinger potentials, solutions of the quadratic Entropic Optimal Transport problem on $\\mathbb{R}^ d$.  Our results hold under mild assumptions on the marginal inputs: in particular, we only assume that they admit an asymptotically positive log-concavity profile, covering as special cases log-concave distributions and bounded smooth perturbations of quadratic potentials.  Up to the authors' knowledge, these are the first results which establish exponential convergence of Sinkhorn's algorithm in a general setting without assuming bounded cost functions or compactly supported marginals.",   
    bibtex:
`@article{ConfortiDurmusGreco2023contraction,
  author  = {Conforti, Giovanni and Durmus, Alain and Greco, Giacomo},
  title   = {Quantitative contraction rates for {S}inkhorn's algorithm: beyond bounded costs and compact marginals},
  journal = {Annals of Applied Probability},
  year    = {2023},
  note    = {To appear},
  eprint  = {2304.04451},
  archivePrefix = {arXiv},
  primaryClass  = {math.PR}
}`
  },
  {
    status: "published",
    authors: "G. Greco, M. Noble, G. Conforti, A. Durmus",
    title: "Non-asymptotic convergence bounds for Sinkhorn iterates and their gradients: a coupling approach",
    venue: "Proceedings of the 36th Conference on Learning Theory (<strong>COLT 2023</strong>), PMLR 195:716–746",
    journal: "https://proceedings.mlr.press/v195/greco23a.html",
    arxiv: "https://arxiv.org/abs/2304.06549",
    abstract: "Computational optimal transport (OT) has recently emerged as a powerful framework with applications in various fields. In this paper we focus on a relaxation of the original OT problem, the entropic OT problem, which allows to implement efficient and practical algorithmic solutions, even in high dimensional settings. This formulation, also known as the Schrödinger Bridge problem, notably connects with Stochastic Optimal Control (SOC) and can be solved with the popular Sinkhorn algorithm. In the case of discrete-state spaces, this algorithm is known to have exponential convergence; however, achieving a similar rate of convergence in a more general setting is still an active area of research. In this work, we analyze the convergence of the Sinkhorn algorithm for probability measures defined on the d-dimensional torus T, that admit densities with respect to the Haar measure of T. In particular, we prove pointwise exponential convergence of Sinkhorn iterates and their gradient. Our proof relies on the connection between these iterates and the evolution along the Hamilton-Jacobi-Bellman equations of value functions obtained from SOC-problems. Our approach is novel in that it is purely probabilistic and relies on coupling by reflection techniques for controlled diffusions on the torus.",
    bibtex:
`@inproceedings{GrecoNobleConfortiDurmus2023colt,
  author    = {Greco, Giacomo and Noble, Maxence and Conforti, Giovanni and Durmus, Alain},
  title     = {Non-asymptotic convergence bounds for {S}inkhorn iterates and their gradients: a coupling approach},
  booktitle = {Proceedings of the Thirty Sixth Conference on Learning Theory},
  series    = {Proceedings of Machine Learning Research},
  volume    = {195},
  pages     = {716--746},
  year      = {2023},
  publisher = {PMLR}
}`
  },
  {
    status: "published",
    authors: "A. Chiarini, G. Conforti, G. Greco, L. Tamanini",
    title: "Gradient estimates for the Schrödinger potentials: convergence to the Brenier map and quantitative stability",
    venue: "<strong>Communications in Partial Differential Equations</strong> 48(6): 895–943 (2023)",
    journal: "https://doi.org/10.1080/03605302.2023.2215527",
    arxiv: "https://arxiv.org/abs/2207.14262",
    abstract: "We show convergence of the gradients of the Schrödinger potentials to the (uniquely determined) gradient of Kantorovich potentials in the small-time limit under general assumptions on the marginals, which allow for unbounded densities and supports. Furthermore, we provide novel quantitative stability estimates for the optimal values and optimal couplings for the Schrödinger problem (SP), that we express in terms of a negative order weighted homogeneous Sobolev norm. The latter encodes the linearized behavior of the 2-Wasserstein distance between the marginals. The proofs of both results highlight for the first time the relevance of gradient bounds for Schrödinger potentials, that we establish here in full generality, in the analysis of the short-time behavior of Schrödinger bridges. Finally, we discuss how our results translate into the framework of quadratic Entropic Optimal Transport, that is a version of SP more suitable for applications in machine learning and data science.",  
    bibtex:
`@article{ChiariniConfortiGrecoTamanini2023gradient,
  author  = {Chiarini, Alberto and Conforti, Giovanni and Greco, Giacomo and Tamanini, Luca},
  title   = {Gradient estimates for the {S}chr\\"odinger potentials: convergence to the {B}renier map and quantitative stability},
  journal = {Communications in Partial Differential Equations},
  volume  = {48},
  number  = {6},
  pages   = {895--943},
  year    = {2023},
  doi     = {10.1080/03605302.2023.2215527}
}`
  },
  {
    status: "published",
    authors: "A. Chiarini, G. Conforti, G. Greco, Z. Ren",
    title: "Entropic turnpike estimates for the kinetic Schrödinger problem",
    venue: "<strong>Electronic Journal of Probability</strong> 27: 1–32 (2022)",
    journal: "https://projecteuclid.org/journals/electronic-journal-of-probability/volume-27/issue-none/Entropic-turnpike-estimates-for-the-kinetic-Schr%C3%B6dinger-problem/10.1214/22-EJP850.full?tab=ArticleLink",
    arxiv: "https://arxiv.org/abs/2108.09161",
    abstract: "We investigate the kinetic Schrödinger problem, obtained considering Langevin dynamics instead of Brownian motion in Schrödinger’s thought experiment. Under a quasilinearity assumption we establish exponential entropic turnpike estimates for the corresponding Schrödinger bridges and exponentially fast convergence of the entropic cost to the sum of the marginal entropies in the long-time regime, which provides as a corollary an entropic Talagrand inequality. In order to do so, we benefit from recent advances in the understanding of classical Schrödinger bridges and adaptations of Bakry–Émery formalism to the kinetic setting. Our quantitative results are complemented by basic structural results such as dual representation of the entropic cost and the existence of Schrödinger potentials.",
    bibtex:
`@article{ChiariniConfortiGrecoRen2022turnpike,
  author  = {Chiarini, Alberto and Conforti, Giovanni and Greco, Giacomo and Ren, Zhenjie},
  title   = {Entropic turnpike estimates for the kinetic {S}chr\\"odinger problem},
  journal = {Electronic Journal of Probability},
  volume  = {27},
  pages   = {1--32},
  year    = {2022},
  doi     = {10.1214/22-EJP850}
}`
  }
];

/* ==========================================================================
   Render publication list
   ========================================================================== */
function renderPublications(){
  const list = document.getElementById("pubList");
  const frag = document.createDocumentFragment();

  PUBLICATIONS.forEach((pub, i) => {
    const li = document.createElement("li");
    li.className = "pub";

    const tag = document.createElement("span");
    tag.className = "pub__tag " + (pub.status === "published" ? "pub__tag--published" : "pub__tag--preprint");
    tag.textContent = pub.status === "published" ? "Published" : "Preprint";
    li.appendChild(tag);

    const title = document.createElement("p");
    title.className = "pub__title";
    title.textContent = pub.title;
    li.appendChild(title);

    const authors = document.createElement("p");
    authors.className = "pub__authors";
    authors.textContent = pub.authors;
    li.appendChild(authors);

    const venue = document.createElement("p");
    venue.className = "pub__venue";
    venue.innerHTML = pub.venue;
    li.appendChild(venue);

    const actions = document.createElement("div");
    actions.className = "pub__actions";

    if (pub.journal){
      actions.appendChild(makeLinkButton("Journal", pub.journal));
    }
    if (pub.arxiv){
      actions.appendChild(makeLinkButton("arXiv", pub.arxiv));
    }
    actions.appendChild(makeModalButton("Abstract", i, "abstract"));
    actions.appendChild(makeModalButton("BibTeX", i, "bibtex"));

    li.appendChild(actions);
    frag.appendChild(li);
  });

  list.appendChild(frag);
}

function makeLinkButton(label, href){
  const a = document.createElement("a");
  a.className = "btn btn--ghost btn--sm";
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = label;
  return a;
}

function makeModalButton(label, index, mode){
  const btn = document.createElement("button");
  btn.className = "btn btn--ghost btn--sm";
  btn.type = "button";
  btn.textContent = label;
  btn.addEventListener("click", () => openModal(index, mode));
  return btn;
}

/* ==========================================================================
   Modal (Abstract / BibTeX pop-up)
   ========================================================================== */
const overlay   = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");
const modalTitle= document.getElementById("modalTitle");
const modalKicker = document.getElementById("modalKicker");
const modalCopy = document.getElementById("modalCopy");
let lastFocused = null;

function openModal(index, mode){
  const pub = PUBLICATIONS[index];
  modalTitle.textContent = pub.title;

  if (mode === "abstract"){
    modalKicker.textContent = "Abstract";
    modalBody.innerHTML = `<p>${pub.abstract}</p>`;
    modalCopy.hidden = true;
    // Render any $...$ / $$...$$ LaTeX in the abstract via KaTeX, if loaded
    if (window.renderMathInElement){
      renderMathInElement(modalBody, {
        delimiters: [
          {left: "$$", right: "$$", display: true},
          {left: "$", right: "$", display: false}
        ]
      });
    }
  } else {
    modalKicker.textContent = "BibTeX";
    modalBody.innerHTML = `<pre id="bibtexText">${escapeHtml(pub.bibtex)}</pre>`;
    modalCopy.hidden = false;
    modalCopy.onclick = () => copyText(pub.bibtex);
    modalCopy.textContent = "Copy to clipboard";
  }

  lastFocused = document.activeElement;
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal(){
  overlay.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

function copyText(text){
  navigator.clipboard.writeText(text).then(() => {
    modalCopy.textContent = "Copied!";
    setTimeout(() => { modalCopy.textContent = "Copy to clipboard"; }, 1600);
  }).catch(() => {
    modalCopy.textContent = "Couldn't copy — select manually";
  });
}

function escapeHtml(str){
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

document.getElementById("modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !overlay.hidden) closeModal(); });

/* ==========================================================================
   Mobile nav toggle
   ========================================================================== */
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("topbar__nav-mobile");
navToggle.addEventListener("click", () => {
  const isOpen = navMobile.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
navMobile.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navMobile.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}));

/* ==========================================================================
   Init
   ========================================================================== */
renderPublications();
