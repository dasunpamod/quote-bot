module.exports = async (ctx, next) => {
  if (['private'].includes(ctx.chat.type)) {
    return next()
  } else {
    ctx.deleteMessage()
  }
}
