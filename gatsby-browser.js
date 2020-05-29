export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Site updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
