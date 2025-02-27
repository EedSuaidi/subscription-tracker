import { Router } from 'express';

const userRouter = Router()

userRouter.get('/', (req, res) => {
    res.send({ title: 'GET All Users' });
})

userRouter.get('/:id', (req, res) => {
    res.send({ title: 'GET User Details' });
})

userRouter.post('/', (req, res) => {
    res.send({ title: 'CREATE New User' });
})

userRouter.put('/:id', (req, res) => {
    res.send({ title: 'UPDATE User' });
})

userRouter.delete('/:id', (req, res) => {
    res.send({ title: 'DELETE User' });
})

export default userRouter;
