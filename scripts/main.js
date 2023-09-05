const dropdownOptions = document.querySelector(
    ".dropdown-options__w100-second"
  );
  
  const dropdownOptionThird = document.querySelector(
    ".dropdown-options__w100-third"
  );
  
  const dropdownSelectedOptions = {
    "Strategy & Innovation": [
      "Strategy",
      "Innovation",
      "Merger & Aquisition",
      "Private Equity",
    ],
    "Organization,People & Change": [
      "Coporate Transformation",
      "Organizational Change Management",
      "Digital Adoption",
      "New Work & Collaboration",
      "People Development & Training",
      "Human Resources",
      "Global Bussiness Services",
      "Post merger integration & crave out",
      "Organizational redesign",
      "Outsourcing"
    ],
    "Sales, Service, Marketing & Price": ["Sales Performance Execellence", "Pricing & Commerical Execellence", "Customer Experience Management", "Customer Relationship Management","Commerical Steering","Data Driven Sales", "Interative Digital Sales"],
    "Production,Supply Chain, R&D und Procurement": ["Production", "Supply Chain Management", "R&D and Product Management", "Procurement", "Digital Operations", "Working Capital Management"],
    "Finance Transformation": ["CFO Pannel & Digital Insights", "CFO Stragtegy & Roadmap", "CFO Organization & Process"],
    "Controlling, Performance Management, Risk & Compilance": [
      "Control Model & Control Logic", "Planning & Forecasting", "Management Reporting", "Operational Cost & Management Accounting", "Risk & Compilance"
    ],
    "Sustainability & Green": ["Decarbonization", "Hydrogen & Electrification", "Circular Economy","ESG Strategy & Performance Management", "Regulatory Disclosure & Risk","Organization & Governance", "Product Development & Commercialization", "Supply Chain & Procurement","Decarbonized operations"],
    "IT,Digital, Data & Analytics": ["IT Management Consulting", "Intelligent Automation", "BI & Anaylatics", "Data Science & Steering Lab"],
  };
  
  for (const [key, value] of Object.entries(dropdownSelectedOptions)) {
    const row = document.createElement("div");
    const p = document.createElement("a");
    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-chevron-right", "icon-color");
    p.textContent = key;
  
    row.append(p);
    row.append(i);
    row.classList.add("row", "hover", "justify-space-between");
  
    dropdownOptions.append(row);
  
    //   Add an event listener on the row;
    row.addEventListener("mouseover", () => {
      dropdownOptionThird.innerHTML = "";
      value.forEach((option) => {
        // Clears Everything first;
        const row = document.createElement("div");
        const a = document.createElement("a");
        row.classList.add("hover");
        a.textContent = option;
        a.classList.add();
        row.append(a);
        dropdownOptionThird.append(row);
        menuTitleChange();
      });
    });
  }
  
  //  To change the title accordingly,
  // When something is hovered I want to change the title of the menu
  
  const menuTitleChange = () => {
    const hoverItems = document.querySelectorAll(".hover");
    const hoverTitle = document.querySelector(".hover-title");
    hoverItems.forEach((itm) => {
      const aTag = itm.querySelector("a");
      itm.addEventListener("mouseover", () => {
        hoverTitle.textContent = aTag.textContent;
        console.log(aTag);
      });
      itm.addEventListener("mouseleave", () => {
        hoverTitle.textContent = "GLOBAL";
      });
    });
  };
  
  menuTitleChange();
  