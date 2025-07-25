import { Editor } from "../components/Editor";
import { ToC } from "../components/ToC";

export function Document() {
  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-rotion-300 font-semibold uppercase text-sm">Table of Contents</span>

        <ToC.Root>
          <ToC.Link>Introdução</ToC.Link>
          <ToC.Section>
            <ToC.Link>Banco de Dados</ToC.Link>
            <ToC.Link>Autenticação</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-center">
        {/* <Link to="/">Acessar Documento</Link> */}
        <Editor />
      </section>
    </main>
  );
}
