/* ==========================================================================
   Teaching data
   -------------------------------------------------------------------------
   I could not access the content of your existing Google Sites "Teaching"
   page automatically, so this file ships with ONE template entry showing
   the expected shape — replace it (and add one object per course/role).

     role        : e.g. "Teaching Assistant", "Instructor"
     title       : course name
     context     : programme / institution / academic year
     description : optional 1-2 line note (leave "" to omit)
     materials   : array of { label, url } — one button per Drive link,
                   e.g. lecture notes, exercise sheets, past exams
   ========================================================================== */
const TEACHING = [
  {
    role: "Teaching Assistant",
    title: "Example course — replace with your real course title",
    context: "Example programme, Example University · A.Y. 2024/2025",
    description: "Delete this placeholder once you've added your own courses below (or edit js/teaching.js directly).",
    materials: [
      { label: "Lecture notes (Drive)", url: "#" },
      { label: "Exercise sheets (Drive)", url: "#" }
    ]
  }
];

function renderTeaching(){
  const list = document.getElementById("teachingList");
  const frag = document.createDocumentFragment();

  TEACHING.forEach((course) => {
    const li = document.createElement("li");
    li.className = "pub";

    const tag = document.createElement("span");
    tag.className = "pub__tag pub__tag--preprint";
    tag.textContent = course.role;
    li.appendChild(tag);

    const title = document.createElement("p");
    title.className = "pub__title";
    title.textContent = course.title;
    li.appendChild(title);

    const context = document.createElement("p");
    context.className = "pub__venue";
    context.textContent = course.context;
    li.appendChild(context);

    if (course.description){
      const desc = document.createElement("p");
      desc.className = "pub__authors";
      desc.textContent = course.description;
      li.appendChild(desc);
    }

    if (course.materials && course.materials.length){
      const actions = document.createElement("div");
      actions.className = "pub__actions";
      course.materials.forEach(m => {
        const a = document.createElement("a");
        a.className = "btn btn--ghost btn--sm";
        a.href = m.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = m.label;
        actions.appendChild(a);
      });
      li.appendChild(actions);
    }

    frag.appendChild(li);
  });

  list.appendChild(frag);
}

/* Mobile nav toggle (same behaviour as the homepage) */
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

renderTeaching();
