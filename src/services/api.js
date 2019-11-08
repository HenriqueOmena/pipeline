export function loadLists() {
    return [
      {
        title: 'Tasks',
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Nisi id ex minim consectetur laboris reprehenderit ea nisi sit.',
            labels: ['lightblue'],
            user: 'https://avatars3.githubusercontent.com/u/35804326?s=460&v=4'
          },
          {
            id: 2,
            content: 'Voluptate.',
            labels: ['green'],
            user: 'https://avatars3.githubusercontent.com/u/35804326?s=460&v=4'
          },
          {
            id: 3,
            content: 'Ullamco velit dolor nostrud in nulla occaecat consequat.',
            labels: ['lightblue'],
            user: 'https://avatars3.githubusercontent.com/u/35804326?s=460&v=4'
          },
          {
            id: 4,
            content: 'Velit proident fugiat mollit eu duis magna incididunt.m ReactJS"',
            labels: ['red'],
            user: 'https://avatars3.githubusercontent.com/u/35804326?s=460&v=4'
          },
          {
            id: 5,
            content: 'Occaecat nulla irure pariatur.',
            labels: ['green'],
            user: 'https://avatars3.githubusercontent.com/u/35804326?s=460&v=4'
          },
        ]
      },
      {
        title: 'Doing',
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Cillum velit incididunt quis sint aute veniam culpa nostrud Lorem velit.',
            labels: ['lightblue'],
            user: 'https://avatars3.githubusercontent.com/u/35804326?s=460&v=4'
          }
        ]
      },
      {
        title: 'Stand by',
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Dolor cillum aliquip laborum.',
            labels: ['lightblue'],
            user: 'https://avatars3.githubusercontent.com/u/35804326?s=460&v=4'
          },
          {
            id: 8,
            content: 'Eiusmod fugiat et duis commodo aute aliquip.',
            labels: ['red'],
            user: 'https://avatars3.githubusercontent.com/u/35804326?s=460&v=4'
          },
          {
            id: 9,
            content: 'Tempor amet nisi.',
            labels: ['green'],
          }
        ]
      },
      {
        title: 'Done',
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Veniam fugiat quis est ullamco minim tempor.',
            labels: ['lightblue'],
          },
          {
            id: 12,
            content: 'Aliquip pariatur voluptate.',
            labels: ['red'],
          },
          {
            id: 13,
            content: 'Deserunt aliqua et laborum occaecat laboris elit cupidatat mollit aliquip.',
            labels: ['lightblue'],
          }
        ]
      },
    ];
  }
