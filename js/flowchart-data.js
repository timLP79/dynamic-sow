/**
 * Flowchart Data Repository
 *
 * This module contains all product flowchart definitions.
 * To add a new product, simply add a new entry to the FlowchartData object.
 */

export const FlowchartData = {
  NAO: {
    id: 'nao',
    name: 'NAO',
    description: 'Network Account Opening control flow',
    mermaidCode: `flowchart LR
    subgraph Input[" "]
        A["-- Website --<br/><br/>FirstName<br/>LastName<br/>Email<br/>Phone<br/><br/>-- SIGNUP --"]
        B[DDC]
    end

    C["NAO API<br/>Name Template<br/>MFA"]
    D["K360 Policies &<br/>Segments"]

    subgraph Outcomes[" "]
        E["ALLOW,"]
        F[BLOCK]
        G[CHALLENGE]
    end

    H["MFA<br/>Kount or Client"]
    I[ALLOW]
    J[BLOCK]
    K[Continue]
    L[End]

    Input --> C
    C --> D
    D --> Outcomes
    E --> K
    G --> H
    H -->|Success| I
    H -->|Failure| J
    I --> K
    J --> L`
  }

  // Future products can be added here:
  // LOGO: {
  //   id: 'logo',
  //   name: 'Logo',
  //   description: 'Logo product description',
  //   mermaidCode: `flowchart TD
  //     A[Start] --> B[End]`
  // },
  //
  // SIGNATURES: {
  //   id: 'signatures',
  //   name: 'Signatures',
  //   description: 'Signatures product description',
  //   mermaidCode: `flowchart TD
  //     A[Start] --> B[End]`
  // },
  //
  // DDC: {
  //   id: 'ddc',
  //   name: 'DDC',
  //   description: 'DDC product description',
  //   mermaidCode: `flowchart TD
  //     A[Start] --> B[End]`
  // }
};
