const findBigFriend = (friends) => {
    let bigFriend = friends[0];
    for (const friend of friends) {
        if (friend.length > bigFriend.length) {
            bigFriend = friend;
        }
    }
    console.log("The biggest friend is:", bigFriend);
};

const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
findBigFriend(friends);
