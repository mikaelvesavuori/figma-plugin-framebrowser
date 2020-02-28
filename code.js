figma.showUI(__html__);
figma.ui.resize(350, 170);

figma.ui.onmessage = message => {
  // Fired if user wants to resize the plugin window
  if (message.type === "resize") {
    figma.ui.resize(message.message.width, message.message.height);
  }

  // This is fired when user gets notified of something
  if (message.type === "notify") {
    figma.notify(message.message);
  }
};
