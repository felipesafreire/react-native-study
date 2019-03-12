import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Platform
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles';
import Task from '../components/Task';
import Icon from 'react-native-vector-icons/FontAwesome'
import ActionButton from 'react-native-action-button'
import AddTask from './AddTask';
import axios from 'axios';
import { server, showError } from '../common';

import todayImage from '../../assets/imgs/today.jpg'
import tommorowImage from '../../assets/imgs/tomorrow.jpg'
import weekImage from '../../assets/imgs/week.jpg'
import monthImage from '../../assets/imgs/month.jpg'

export default class Agenda extends Component {

    state = {
        tasks: [],
        visibleTasks: [],
        showDoneTasks: true,
        showAddTask: false
    }

    componentDidMount = async () => { await this.loadTasks() }

    loadTasks = async () => {

        const dateMax = moment().add({ days: this.props.daysAhead }).format("YYYY-MM-DD 23:59")
        await axios.get(`${server}/tasks`, {
            params: {
                date: dateMax
            }
        }).then(result => {
            console.log(result);
            this.setState({ tasks: result.data }, this.filterTasks)
        }).catch(err => {
            showError(err)
        })

    }

    deleteTask = async id => {
        await axios.delete(`${server}/tasks/${id}`)
            .then(() => this.loadTasks())
            .catch(err => { showError(err) })
    }

    addTask = async task => {
        await axios.post(`${server}/tasks`, {
            desc: task.desc,
            estimateAt: task.date
        }).then(() => {
            this.setState({ showAddTask: false }, this.loadTasks)
        }).catch(err => {
            showError(err)
        })
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null;
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            // const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(task => task.doneAt === null)
        }
        this.setState({ visibleTasks })
    }

    toggleTask = async id => {
        await axios.put(`${server}/tasks/${id}/toggle`)
            .then(() => this.loadTasks())
            .catch((err) => { showError(err) })
    }

    render() {

        let styleColor = null;
        let image = null;
        switch (this.props.daysAhead) {

            case 0:
                styleColor = commonStyles.colors.today;
                image = todayImage;
                break;

            case 1:
                styleColor = commonStyles.colors.tommorow;
                image = tommorowImage;
                break;

            case 7:
                styleColor = commonStyles.colors.week;
                image = weekImage;
                break;

            default:
                styleColor = commonStyles.colors.month;
                image = monthImage;
                break;

        }

        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask}
                    onSave={this.addTask}
                    onCancel={() => this.setState({ showAddTask: false })} />
                <ImageBackground source={image} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name="bars"
                                size={20}
                                color={commonStyles.colors.secondary}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                size={20}
                                color={commonStyles.colors.secondary}></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <FlatList data={this.state.visibleTasks}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <Task {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask} />}>
                    </FlatList>
                </View>
                <ActionButton buttonColor={styleColor}
                    onPress={() => this.setState({ showAddTask: true })}></ActionButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    taskContainer: {
        flex: 7
    },
    iconBar: {
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})