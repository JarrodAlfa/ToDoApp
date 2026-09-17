import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Checkbox } from 'expo-checkbox';
import { FlatList, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ToDoType={
  id: number;
  title: string;
  isDone: boolean;
}
 
export default function Index() {
  const DATA = [
    {
      id: 1,
      title: 'todo 1',
      isDone: false,
    },
    {
      id: 2,
      title: 'todo 2',
      isDone: true,
    },
    {
      id: 3,
      title: 'todo 3',
      isDone: false,
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {alert('menu clicked!')}}>
          <Ionicons name='menu' size={24} color={'333'}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {alert('profile clicked!')}}>
          <Image 
          source={{uri: 'https://i.pinimg.com/736x/cf/62/16/cf6216fac15f7562cc2693d6549e2597.jpg'}} 
          style={{width: 40, height: 40, borderRadius: 20}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name='search' size={24} color={'333'} />
        <TextInput placeholder='search' style={styles.searchInput} clearButtonMode='always'/>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({item}) => (
          <ToDoItem todo={item}/>
        )}
      />

      <KeyboardAvoidingView style={styles.footer} behavior="padding" keyboardVerticalOffset={10}>
        <TextInput placeholder='add new task' style={styles.newTaskInput}/>
        <TouchableOpacity onPress={() => {}} style={styles.addButton}>
          <Ionicons name="add" size={34} color={'#fff'}/>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const ToDoItem = ({todo}:{todo:ToDoType}) => (
  <View style={styles.todoContainer}>
    <View style={styles.todoInfoContainer}>
      <Checkbox 
        value={todo.isDone} 
        color={todo.isDone ? '#93ffbb' : undefined}
      />
      <Text style={[styles.todoText, todo.isDone && {textDecorationLine: 'line-through'}]}>{todo.title}</Text>
    </View>
    <TouchableOpacity onPress={() => {alert('delete item ' + todo.id)}}>
      <Ionicons name="trash" size={24} color={'#fe6565'} />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    gap: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333'
  },
  todoContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoInfoContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  todoText: {
    fontSize: 16,
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  newTaskInput: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#93ffbb',
    padding: 8,
    borderRadius: 10,
    marginLeft: 20,
  },
});
