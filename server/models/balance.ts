import mongoose from 'mongoose'
import increasingSequence from '../utils/increasingSequence'

import { Balance } from './types/balance'

const BalanceSchema = new mongoose.Schema<Balance>(
  {
    bid: { type: Number, unique: true },
    reason: {
      en_us: { type: String, default: '' },
      ja_jp: { type: String, default: '' },
      zh_cn: { type: String, default: '' }
    },
    type: { type: String, default: '' },
    time: { type: Number, default: 0 },
    amount: { type: Number, default: 0 },
    status: { type: Number, default: 0 }
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

BalanceSchema.pre('save', increasingSequence('bid'))

const BalanceModel = mongoose.model<Balance>('balance', BalanceSchema)

export default BalanceModel
