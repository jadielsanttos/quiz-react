import { QuestionType } from '../types/QuestionItem'
import { Question } from "@/data/Questions"
import { useEffect, useState } from 'react'

type Props = {
    question: QuestionType
    count: number
    onAnswer: (answer: number) => void
}

export const ItemQuestion = ({ question, count, onAnswer}: Props) => {
    
    const [optionSelected, setOptionSelected] = useState<number | null>(null)

    const checkQuestion = (key: number) => {
        if(optionSelected === null) {
            setOptionSelected(key)

            setTimeout(() => {
                setOptionSelected(null)
                onAnswer(key)
            }, 2000)
        }
    }

    return (
        <div>
            <div className="pb-5 border-b"><h1 className='text-md sm:text-xl'>{count} - {question.question}</h1></div>
            <div className="py-5">
                {question.options.map((item, key) => (
                    <div   
                        onClick={() => checkQuestion(key)}
                        key={key} 
                        className={`bg-gray-50 mb-3 p-2 border-2 border-gray-100 rounded cursor-pointer
                        ${optionSelected !== null && 'cursor-default opacity-50'}
                        ${optionSelected !== null && optionSelected === question.answer && optionSelected === key && 'bg-green-700 text-white opacity-100 border-green-700'}
                        ${optionSelected !== null && optionSelected !== question.answer && optionSelected === key && 'bg-red-700 text-white opacity-100 border-red-700'}
                        `}
                    >
                        <h3>{item}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}