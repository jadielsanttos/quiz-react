'use client'

import { useState } from 'react'
import styles from './page.module.css'
import { ItemQuestion } from '@/components/ItemQuestion'
import { Question } from '@/data/Questions'

const Page = () => {

    const [correctAnswers, setCorrectAnswers] = useState<number>(0)
    const [answers, setAnswers] = useState<number[]>([])
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [showResult, setShowResult] = useState<boolean>(false)
    const [widthBar, setWidthBar] = useState<number>(0)
   

    const loadNextQuestion = () => {
        if(Question[currentQuestion + 1]) {
            setCurrentQuestion(currentQuestion + 1)

            setWidthBar(Math.floor(((currentQuestion + 1) / Question.length) * 100))

        }else {
            setShowResult(true)
            setWidthBar(100)
        }
    }

    const handleAnswered = (answer: number) => {
        setAnswers([...answers, answer])

        if(answer === Question[currentQuestion].answer) {
            setCorrectAnswers(correctAnswers + 1)
        }

        loadNextQuestion()
    }

    const handleResetQuiz = () => {
        setCurrentQuestion(0)
        setCorrectAnswers(0)
        setShowResult(false)
        setWidthBar(0)
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-sky-100 to-indigo-100 px-5">
            <div style={{width: `${widthBar}%`}} className='h-1 fixed left-0 top-0 bg-sky-500 transition-all duration-700'></div>
            <div className="w-full max-w-xs p-5 bg-white rounded shadow-2xl text-black sm:max-w-xl">
                {!showResult &&
                    <ItemQuestion question={Question[currentQuestion]} count={currentQuestion + 1} onAnswer={handleAnswered} />
                }

                {!showResult &&
                    <div className="pt-5 border-t">
                        <span className='text-sm md:text-md'>{Question[currentQuestion + 1] ? `Questão ${currentQuestion + 1} de ${Question.length}` : 'Última questão'}</span>
                    </div>
                }
            
                {showResult &&
                    <div>
                        <div className='pb-5 border-b'><h1 className='text-xl text-center sm:text-2xl'>Teste finalizado</h1></div>
                        <div className="py-5 flex justify-center items-center flex-col">
                            <p className='mb-5 text-lg'>Seu aproveitamento foi de</p>
                            <div className='w-20 h-20 flex justify-center items-center bg-sky-500 text-white shadow-md shadow-gray-600 rounded-full'><p className='text-xl font-bold'>{`${Math.floor((correctAnswers / Question.length) * 100)}%`}</p></div>
                            <p className='mt-5 text-md'>De {Question.length} questões você acertou {correctAnswers}</p>
                        </div>
                        <div className="pt-5 border-t"><button onClick={handleResetQuiz} className='py-1 px-2 bg-sky-500 rounded text-white text-lg shadow-md shadow-gray-600'>Refazer</button></div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Page