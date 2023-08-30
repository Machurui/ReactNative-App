import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const QuestionScreen = ({ navigation }) => {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("http://estiamqcm.davilat.com/api/quizzes")
      .then((response) => response.json())
      .then((data) => {
        setQuestionData(data[0].questions);
        setLoading(false);
      })
      .catch((err) => {
        console.error(
          "Il y a eu une erreur lors de la récupération des données:",
          err
        );
        setError(err);
        setLoading(false);
      });
  }, []);

  const isCorrect = (data) => {
    if (data === true) {
      setScore(score + 1);
      alert("Bonne réponse !");
    } else {
      alert("Mauvaise réponse !");
    }
    setTimeout(() => {handleNextQuestion()}, 1000)
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Votre score est : " + score);
      setScore(0);
      setCurrentQuestionIndex(0);
      navigation.navigate("Home");
    }
  };

  if (loading) {
    return <Text>Chargement...</Text>;
  }

  if (error) {
    return <Text>Erreur lors du chargement des données.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>
        Question {currentQuestionIndex + 1}:{" "}
        {questionData[currentQuestionIndex].title}
      </Text>
      {questionData[currentQuestionIndex].answers.map((answer, index) => (
        <View key={index} style={styles.answerContainer}>
          <Button
            onPress={() => isCorrect(answer.isCorrect)}
            title={(index + 1) + " : " + answer.title}
          />
        </View>
      ))}
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>SCORE : {score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  scoreContainer: {
    backgroundColor: '#f7f9fc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  questionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#344356",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#344356",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginTop: 40,
  },
  answerContainer: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default QuestionScreen;
