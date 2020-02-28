figma.showUI(__html__);

figma.ui.resize(350, 170);

figma.ui.onmessage = message => {
  if (message.type === "resize") {
    figma.ui.resize(message.width, message.height);
  }

  if (message.type === "notify") {
    figma.notify(message.message);
  }
};
