import type { LanguageFn } from "highlight.js";

const nn: LanguageFn = (hljs) =>  {
    const regex = hljs.regex;

    const IDENT = /^a-zA-Z_][a-zA-Z0-9_]*/
    const KEYWORDS = [
        "Tensor"
    ]

    const COMMENT = hljs.COMMENT(/#/, /$/)

    const TERMINAL_DECIMAL = {
        scope: "number",
        match: /[1-9][0-9]*/
    }

    const STRING_LITERAL = {
        scope: "string",
        begin: /["']/,
        end: /["']/
    }

    const OPERATORS = {
        scope: "operator",
        match: /(\|>)|[=\+\*\^]/
    }

    const PARENTHESIS = {
        scope: "punctuation",
        match: /[\(\)\[\]]/
    }

    return {
        unicodeRegex: true,
        name: 'nn',
        keywords: {
            keyword: KEYWORDS
        },
        contains: [
            COMMENT,
            TERMINAL_DECIMAL,
            STRING_LITERAL,
            OPERATORS,
            PARENTHESIS
        ]
    } 
    
}

export default nn;