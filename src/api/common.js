import axios from 'axios'
import { HOST } from './config'

export function getWord() {
    const url = HOST + `/search/hot`;
    return axios.get(url)
}

export function getSong(word) {
    const url = HOST + `/search?keywords=${word}`;
    return axios.get(url)
}

export function getRank() {
    const url = HOST + `/top/list?idx=1`;
    return axios.get(url)
}

export function getRemd() {
    const url = HOST + '/personalized';
    return axios.get(url)
}

export function getNewSong() {
    const url = HOST + '/personalized/newsong';
    return axios.get(url)
}
