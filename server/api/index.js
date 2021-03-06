import { Router } from 'express'

import users from './users'
import log from './log'

const router = Router()


// Add USERS Routes
router.use(users)
router.use(log)

export default router
