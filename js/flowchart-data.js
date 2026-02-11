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
        description: 'New Account Opening control flow',
        mermaidCode: `flowchart LR
    subgraph NAO_Input[" "]
        NAO_A["-- Website --<br/><br/>FirstName<br/>LastName<br/>Email<br/>Phone<br/><br/>-- SIGNUP --"]
        NAO_B[DDC]
    end

    NAO_D["K360 Policies &<br/>Segments"]

    subgraph NAO_Outcomes[" "]
        NAO_E["ALLOW,"]
        NAO_F[BLOCK]
        NAO_G[CHALLENGE]
    end

    NAO_H["MFA<br/>Kount or Client"]
    NAO_I[ALLOW]
    NAO_J[BLOCK]
    NAO_K[Continue]
    NAO_L[End]

    NAO_Input -->|NAO API<br/>Name Template<br/>MFA| NAO_D
    NAO_D --> NAO_Outcomes
    NAO_E --> NAO_K
    NAO_G --> NAO_H
    NAO_H -->|Success| NAO_I
    NAO_H -->|Failure| NAO_J
    NAO_I --> NAO_K
    NAO_J --> NAO_L`
    },

    LOGIN: {
        id: 'login',
        name: 'LOGIN',
        description: 'Login control flow',
        mermaidCode: `flowchart LR
    subgraph LOGIN_Input[ ]
        LOGIN_A["-- Website --<br/><br/>FirstName<br/>LastName<br/>Email<br/>Phone<br/><br/>-- SIGNUP --"]
        LOGIN_B[DDC]
    end

    LOGIN_D{"Customer<br/>Authentication"}
    LOGIN_D --> |YES| LOGIN_D1[POST: Login API] --> LOGIN_D3{"Segment & <br/> Policy Evalution"} --> LOGIN_Outcomes
    LOGIN_D --> |NO| LOGIN_D2[POST: Events API<br/>Failed Attempt]

    subgraph LOGIN_Outcomes[ ]
        direction LR
        LOGIN_E["ALLOW"] --> LOGIN_E1([Consumer successfuly logs in])
        LOGIN_F[BLOCK] --> LOGIN_F1([Consumer gets blocked from accessing the account])
        LOGIN_G[CHALLENGE] --> LOGIN_G1([Consumer receives MFA])
    end

    LOGIN_Input --> LOGIN_D

    %%LOGIN_F1 --> LOGIN_H{MFA Challenge<br/>Status}`
    }
};
