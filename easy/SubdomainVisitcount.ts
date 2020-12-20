var subdomainVisits = function (cpdomains: string[]) {
  let visitCounts: any;
  visitCounts = {};
  for (let i = 0; i < cpdomains.length; i++) {
    // Split visits and domains by the space
    const [visits, domains] = cpdomains[i].split(" ");

    // Create array of subdomains in domain
    let subdomains = domains.split(".");

    while (subdomains.length) {
      // Join all items in subdomains array
      let subdomain = subdomains.join(".");

      // If subdomain already exists in object, add to existing count
      visitCounts[subdomain] = visitCounts[subdomain]
        ? visitCounts[subdomain] + visits
        : visits;

      // Remove first subdomain from array
      subdomains.shift();
    }
  }

  return Object.keys(visitCounts).map((key) => `${visitCounts[key]} ${key}`);
};

console.log(
  subdomainVisits([
    "900 google.mail.com",
    "50 yahoo.com",
    "1 intel.mail.com",
    "5 wiki.org",
  ])
);
