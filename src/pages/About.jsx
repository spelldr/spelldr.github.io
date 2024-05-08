import { Link } from "@carbon/react";

export default function about() {
  return (
    <>
      <h3>About this site</h3>
      <p>
        I bought this domain in 2009, exclusively for email hosting through
        Gmail. Since I very rarely need to apply for new jobs, it wasn't worth a
        monthly fee to have a web presence. Since Google has eliminated their
        free workspace offering, I am migrating to a new service, which includes
        free static site hosting.
      </p>
      <p>
        Currently this site is built with content from a private Github repo
        using a central <Link>resume.json</Link>, and a very basic{" "}
        <Link href="https://carbondesignsystem.com/">IBM Carbon/react</Link>{" "}
        layout.
      </p>
      <p>
        Eventually I plan on putting the json into multiple frameworks including
        Django, Angular, node.js, Ruby on Rails, and anything else that might be
        fun.
      </p>
      <p>
        If you have gotten this far, send me a message on linkedin and let me
        know what you think.
      </p>
      <p>:D</p>
    </>
  );
}
