/* ==========================================================================
   Publication data
   -------------------------------------------------------------------------
   Edit this array to add, remove or correct publications. Each entry:
     status   : "preprint" | "published"   (controls the small tag colour)
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
    abstract: "The paper proposes a simple representation for isotropic random fields on the sphere that makes several notions of sparsity tractable under the isotropy constraint. It shows that suitably built sparse fields can reproduce the angular power spectrum and higher-order polyspectra of common non-Gaussian fields while admitting computationally efficient simulation, and it constructs isotropy-preserving sparse approximations of spherical random fields, addressing an issue raised in the cosmology literature.",
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
    abstract: "This paper recasts score-based diffusion generative models in an infinite-dimensional, abstract Hilbertian setting using Gamma and Malliavin calculi. The forward noising process is built from Dirichlet forms on the Cameron-Martin space of Gaussian measures and Wiener chaoses, and an abstract time-reversal formula is used to show that the score function is a Malliavin derivative corresponding to a conditional expectation. This extends existing finite-dimensional entropic convergence bounds to the Hilbertian setting and specializes the discussion to spherical random fields, in particular Whittle-Matérn fields.",
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
    abstract: "The paper establishes quantitative stability bounds for the Hessian of entropic optimal transport potentials in general, possibly unbounded settings — the first result of this kind at second order. The proof strategy relies on semiconcavity properties of entropic potentials and on the representation of entropic transport plans as laws of forward and backward diffusion processes (Schrödinger bridges). As a consequence, the authors deduce exponential convergence rates, with polynomial dependence on the regularization parameter, for the gradient and Hessian of Sinkhorn's iterates — a problem previously open in unbounded settings.",
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
    abstract: "This paper studies stability of optimizers and convergence of Sinkhorn's algorithm for the entropic optimal transport problem. For the quadratic cost, the authors show that semiconcavity of one entropic potential controls the relative entropy between optimal plans by the squared Wasserstein distance between the marginals. Applied to Sinkhorn's algorithm, this yields exponential convergence without requiring a bounded ground cost, including new results for log-concave marginals at every regularization level, marginals with light tails, subspace elastic costs, Lipschitz costs with bounded Hessian, and compact Riemannian manifolds.",
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
    abstract: "The authors prove non-asymptotic exponential convergence of Sinkhorn's iterates to the Schrödinger potentials solving the quadratic entropic optimal transport problem on R^d. The result holds under mild assumptions — an asymptotically positive log-concavity profile on the marginals — covering log-concave distributions and bounded smooth perturbations of quadratic potentials as special cases, and gives some of the first exponential convergence guarantees for Sinkhorn's algorithm without assuming bounded costs or compactly supported marginals.",
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
    abstract: "Working with probability measures on the d-dimensional torus, the paper proves pointwise exponential convergence of Sinkhorn's iterates and of their gradients. The proof connects these iterates to the value functions of stochastic optimal control problems and their Hamilton-Jacobi-Bellman equations, and is purely probabilistic, relying on coupling-by-reflection techniques for controlled diffusions — a novel approach that the authors note could extend to the non-compact Euclidean setting.",
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
    abstract: "The authors show that gradients of the Schrödinger potentials converge to the Brenier optimal transport map in the small-time limit, under general marginal assumptions that allow unbounded densities and supports. They also derive new quantitative stability estimates for the values and optimal couplings of the Schrödinger problem, expressed through a negative-order weighted homogeneous Sobolev norm that encodes the linearized behaviour of the 2-Wasserstein distance, with direct consequences for quadratic entropic optimal transport.",
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
    abstract: "The paper studies the kinetic Schrödinger problem, in which Langevin dynamics replace Brownian motion in Schrödinger's original thought experiment, and proves turnpike-type estimates for the long-time behaviour of the associated entropic cost. The results build on recent advances for classical Schrödinger bridges together with a kinetic adaptation of the Bakry-Émery calculus, and are complemented by structural results such as a dual representation of the entropic cost and existence of Schrödinger potentials.",
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
