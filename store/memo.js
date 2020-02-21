export const state = () => ({
    memo: [
        {
            title: "1st title",
            content: "1st c",
            created: "2019/02/25 16:36"
        },
        {
            title: "2 title",
            content: "2 c",
            created: "2019/02/25 19:36"
        },
        {
            title: "3 title",
            content: "3 c",
            created: "2019/01/21 16:36"
        },
        {
            title: "4 title",
            content: "4 c",
            created: "2019/02/26 16:36"
        },
    ],
    page: 0,
})

export const mutations = {
    insert: function (state, obj) {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let created = year + '/' + month + '/' + day + " " + hour + ":" + minute
        console.log("created:", created)
        state.memo.unshift({
            title: obj.title,
            content: obj.content,
            created: created
        })
    },
    remove: function (state, obj) {
        console.log("commit delete")
        for (let i = 0; i < state.memo.length; i++) {
            const savedObj = state.memo[i]
            console.log('savedObj:', savedObj);

            if (savedObj.title == obj.title && savedObj.content == obj.content) {
                console.log('FLAGGG');

                state.memo.splice(i, 1);
                return
            }
        }
    },
    set_state: function (state, page) {
        state.page = page;
    }

}