import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of USA?',
			answerOptions: ['New York','London','Washington','Dublin'],
			correct: "Washington",
		},
		{
			questionText: 'Who is CEO of Facebook?',
			answerOptions: ['Jeff Bezos','Mark Zuckerberg','Bill Gates','Tony Stark'],
			correct: "Mark Zuckerberg",
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: ['Apple','Intel','Amazon','Microsoft'], 
			correct: "Apple",
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: ['1','4','6','7'], 
			correct: "7",
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect,answer) => {
		if (isCorrect == answer) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<button key={index} onClick={() => handleAnswerOptionClick(questions[currentQuestion].correct,answerOption)}>{answerOption}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
