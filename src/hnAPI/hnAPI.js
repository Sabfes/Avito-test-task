import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/',
})


// STORY
export const getStoryIds = async () => {
    return await instance.get('newstories.json');
};

export const getStory = async (storyId) => {
    const result = await instance.get(`item/${storyId}.json`);
    return result.data;
};

export const getNewStories = async (number) => {
    const newstories = await getStoryIds();
    const items = await Promise.all(
        newstories.data.slice(0, number).map(id => getStory(id))
    );
    return items.filter(Boolean);
};


//COMMENTS
export const getStoryCommentsByStoryId = async (id) => {
    const story = await getStory(id);
    let items;

    if(story.kids) {
        items = await Promise.all(
            story.kids.slice(0, 100).map(id => getStory(id))
        )
    } else {
        return null;
    }

    return items;
}

