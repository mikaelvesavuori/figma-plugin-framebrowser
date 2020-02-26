figma.showUI(__html__);

figma.ui.onmessage = message => {
  if (message.type === "resize") {
    figma.ui.resize(message.width, message.height);
  }
};
