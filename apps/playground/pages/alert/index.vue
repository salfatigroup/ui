<template>
  <div class="flex flex-col space-y-2 mt-10 justify-center items-center">
    <k-alert
      title="Order completed"
      variant="info"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam."
      :buttons="[{ label: 'View Status' }, { label: 'Dismiss' }]"
    />
    <k-alert
      title="Order completed"
      variant="success"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam."
      :buttons="[{ label: 'View Status' }, { label: 'Dismiss' }]"
    />
    <k-alert
      title="Order completed"
      variant="warn"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam."
      :buttons="[{ label: 'View Status' }, { label: 'Dismiss' }]"
    />
    <k-alert
      title="Order completed"
      variant="danger"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam."
      :buttons="[{ label: 'View Status' }, { label: 'Dismiss' }]"
    />
    <k-alert
      title="Order completed"
      variant="info"
      accent
      :onClose="() => console.log('close')"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam."
    />
    <k-alert
      title="Order completed"
      variant="success"
      accent
      :onClose="() => console.log('close')"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam."
    />
    <k-alert
      title="Order completed"
      variant="warn"
      accent
      :onClose="() => console.log('close')"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam."
    />
    <k-alert
      title="Order completed"
      variant="danger"
      accent
      :onLearnMore="() => console.log('close')"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam."
    />
  </div>
</template>
