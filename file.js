

const task = projectData.tasks[0];


task.assets.forEach((asset) => {

  const assetContainer = document.createElement('div');
  assetContainer.classList.add('asset-container');

  const titleElement = document.createElement('h3');
  titleElement.textContent = asset.asset_title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = asset.asset_description;

  assetContainer.appendChild(titleElement);
  assetContainer.appendChild(descriptionElement);


  document.body.appendChild(assetContainer);
});
