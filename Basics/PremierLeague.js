const template = document.createElement("template");
template.innerHTML = `
    <div>
    <h1>English Premier Legue</h1>
    <slot name="first"></slot> 
    <slot name="list"></slot>
    </div>
`;

class PremierLeague extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: "closed" });
    // const div = document.createElement("div");
    // div.textContent = "English Premier League";
    const cloned = template.content.cloneNode(true);
    root.append(cloned);
  }
}

customElements.define("premier-league", PremierLeague);
