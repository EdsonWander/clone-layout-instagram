import React from 'react';
import { View,  FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';

function Feed() {

    const posts = [
        { 
            id: '1',
            author: 'Edson Wander',
            picture_profile: 'https://images.vexels.com/media/users/3/147101/isolated/lists/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png',
            picture_url: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/22726-cartaz.jpg',
            likes: '1234',
            description: 'Saiu o filme do R A M B O',
            hashtags: '#rambo #cinema #stallone',
            place: 'Cinema'
        },
        { 
            id: '2',
            author: 'Edson Wander',
            picture_profile: 'https://images.vexels.com/media/users/3/147101/isolated/lists/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png',
            picture_url: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/22050-cartaz.jpg',
            likes: '2510',
            description: 'Coringa, o melhor filme do ano???',
            hashtags: '#coringa #oscar2019',
            place: 'Cinema'
        },
        { 
            id: '3',
            author: 'Edson Wander',
            picture_profile: 'https://images.vexels.com/media/users/3/147101/isolated/lists/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png',
            picture_url: 'https://www.kinoplex.com.br/filmes/images/cartaz/262x388/scooby-o-filme.jpg?',
            likes: '987',
            description: 'Ele está de volta, Scooby! O filme',
            hashtags: '#scoobydoo, #desenho',
            place: 'Cinema'
        }
    ];

    function renderItem( { item: post } ){
        return (
            <View>

                <View style={styles.postHeader}>

                    <View style={styles.userInfo}>

                        <TouchableOpacity>
                            <Image style={styles.picture_profile} source={{uri: post.picture_profile}} />
                        </TouchableOpacity>

                        <Text style={styles.author}> {post.author} </Text> 
                        
                    </View>

                    <Text style={styles.place}> {post.place} </Text>

                    <View style={styles.postOptions}>
                        <TouchableOpacity>
                        <Image source={options} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View>
                     <Image style={styles.picture_url} 
                    source={{uri: post.picture_url}} />
                </View>

                <View style={styles.footer}>

                    <View style={styles.actions}>

                        <View style={styles.leftActions}>
                            <TouchableOpacity style={styles.action}>
                                <Image source={like} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image source={comment} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}> 
                                <Image source={send} />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.actions}> 
                                <Image source={save} />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View >
                        <Text style={styles.likes}>{post.likes} likes</Text>
                        <Text style={styles.comment}>{post.description}</Text>
                        <Text style={styles.hashtags}>{post.hashtags}</Text>
                    </View>

                </View>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },

    postOptions: {},

    userInfo: {
        flexDirection: 'row'
    },

    author: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },

    place: {
        fontSize: 12,
        color: '#666',
        marginTop: 15,
        marginLeft: -390
    },

    picture_url: {
        width: '100%',
        height: 400
    },

    picture_profile: {
        width: 40,
        height: 40
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 3
    },

    footer: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },

    action: {
        marginLeft: 10
    },

    likes: {
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 12 
    },

    comment: {
        marginLeft: 5
    },

    hashtags: {
        marginLeft: 5,
        color: '#002d5e'
    },

    description: {
        marginLeft: 5,
        color: '#000',
        lineHeight: 18
    },

    leftActions: {
        flexDirection: 'row'
    }
    
});

export default Feed;