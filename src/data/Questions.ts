import { QuestionType } from "@/types/QuestionItem"

export const Question: QuestionType[] = [
    {
        question: 'Como declarar uma variável com Javascript?', 
        options: [
            'numero = 1',
            '$numero = 2',
            'int numero = 10',
            'let numero = 5'
        ],
        answer: 3
    },
    {
        question: 'Qual método é usado para pegar dados em uma requisição?', 
        options: [
            'PUT',
            'GET',
            'UPDATE',
            'POST'
        ],
        answer: 1
    },
    {
        question: 'Através de que ataque é possível ter acesso a uma base de dados, aproveitando falhas de segurança de um sistema?', 
        options: [
            'XSS',
            'Pishing',
            'Main in middle',
            'SQL Injection'
        ],
        answer: 3
    },
    {
        question: 'Qual banco de dados abaixo não é relacional?', 
        options: [
            'MySQL',
            'PostgreSQL',
            'MongoDB',
            'SQL Server'
        ],
        answer: 2
    },
    {
        question: 'Das tecnologias abaixo, qual não é uma linguagem de programação?', 
        options: [
            'Javascript',
            'PHP',
            'C#',
            'Node js'
        ],
        answer: 3
    }
]