import React from "react";
import { ScrollView, View, FlatList, Text } from "react-native";

const alunos = [
  { id: 1, nome: "João", nota: 7.9 },
  { id: 2, nome: "Ana", nota: 9.1 },
  { id: 3, nome: "Bia", nota: 5.4 },
  { id: 4, nome: "Felipe", nota: 7.6 },
  { id: 5, nome: "Claudia", nota: 6.8 },
  { id: 6, nome: "Roberto", nota: 7.9 },
  { id: 7, nome: "José", nota: 9.0 },
  { id: 8, nome: "Mario", nota: 8.6 },
  { id: 9, nome: "Rebeca", nota: 1.2 },

  { id: 11, nome: "João", nota: 7.9 },
  { id: 12, nome: "Ana", nota: 9.1 },
  { id: 13, nome: "Bia", nota: 5.4 },
  { id: 14, nome: "Felipe", nota: 7.6 },
  { id: 15, nome: "Claudia", nota: 6.8 },
  { id: 16, nome: "Roberto", nota: 7.9 },
  { id: 17, nome: "José", nota: 9.0 },
  { id: 18, nome: "Mario", nota: 8.6 },
  { id: 19, nome: "Rebeca", nota: 1.2 }
];

const itemEstilo = {
  paddingHorizontal: 15,
  height: 70,
  backgroundColor: "#DDD",
  borderWidth: 0.5,
  borderColor: "#222",

  //Flex
  //justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between'

};

export const Aluno = props => {
  return (
    <View style={itemEstilo}>
      <Text> Nome: {props.nome}</Text>
      <Text style={{ fontWeight: "bold" }}> Nota: {props.nota}</Text>
    </View>
  );
};

export default props => {
  const renderItem = ({ item }) => {
    return <Aluno {...item} />;
  };

  return (
    <ScrollView>
      <FlatList
        data={alunos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};
