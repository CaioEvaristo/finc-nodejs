function create(req, res) {

    console.log(req.body);

    return res.status(200).json(req.body);
}

function list () {
    return {
        services: 'connected'
    };
}

function update (id) {
    return {
        id: id
    };
}

function remove (id) {
    return {
        id: id
    };
}

function show (id) {
    return {
        id: id
    };
}

export default {
    create,
    list,
    update,
    remove,
    show
};