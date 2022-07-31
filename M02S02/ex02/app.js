$(function () {
  $('#personForm')
    .on('submit', function (event) {
      event.preventDefault();
      // imbracam obiectul de DOM in obiect jQuery
      const $form = $(this);
      // folosim obiectul d DOM ca argument
      const formData = new FormData(this);
      // const $detailsFieldset = $('#personForm fieldset:nth-child(2)');
      // in css se numara de la 1
      // $detailsFieldset.append(renderPerson(formData));

      $form.after(renderData(formData));

      $form.trigger('reset');
      $('.renderSkillsUl').remove();
    })
    .find('fieldset:nth-child(2)')
    .append(renderSkillControls());

  $('#has-pets').on('click', function () {
    const $checkbox = $(this);
    const $nextFieldset = $checkbox.siblings('.pet-fieldset');

    if ($checkbox.prop('checked')) {
      $nextFieldset.slideDown();
    } else {
      $nextFieldset.slideUp();
    }
  });

  $('.pet-fieldset')
    .find('button[type="button"]')
    .on('click', function () {
      const $petButton = $(this);

      const $inputs = $petButton
        .parents('.pet-fieldset')
        .find('input[name^="pet-"]:not([name^="pet-data"])');

      const petValues = [];
      $inputs.each(function () {
        const $input = $(this);

        petValues.push($input.val());
      });

      $petButton.after(renderPetUl(petValues));

      // hoisting - urcate de sistem

      function renderPetUl(petValues) {
        const petsClassName = 'renderPetUl';
        let $ul = $(`.${petsClassName}`);
        if ($ul.length <= 0) {
          $ul = $('<ul>', {
            class: petsClassName,
          });
        }

        const petData = petValues.join(',');

        const $petLi = $('<li>')
          .append(
            $('<span>', {
              text: petData,
            }),
          )
          .append(
            $('<input>', {
              value: petData,
              type: 'hidden',
              name: `pet-data-${petData}`,
            }),
          );

        $petLi.appendTo($ul);

        return $ul;
      }
    });

  $('.friendForm')
    .find('button[type="button"]')
    .on('click', function () {
      const $friendButton = $(this);
      const $inputFriends = $friendButton
        .parents('.friendForm')
        .find('input[name^="friend-"]:not([name^="friend-data"])');

      const friendValues = [];
      $inputFriends.each(function () {
        const $input = $(this);

        friendValues.push($input.val());
      });

      $friendButton.after(renderFriendUl(friendValues));

      function renderFriendUl(friendValues) {
        const friendsClassName = 'renderFriendUl';

        let $ul = $(`.${friendsClassName}`);
        if ($ul.length <= 0) {
          $ul = $('<ul>', {
            class: friendsClassName,
          });
        }

        const friendData = friendValues.join(',');

        const $friendLi = $('<li>')
          .append(
            $('<span>', {
              text: friendData,
            }),
          )
          .append(
            $('<input>', {
              value: friendData,
              type: 'hidden',
              name: `friend-data-${friendData}`,
            }),
          );

        $friendLi.appendTo($ul);

        return $ul;
      }
    });

  //// hoisting doar pentru function

  function renderPerson(formData) {
    const name = formData.get('name');
    const surname = formData.get('surname');
    const age = formData.get('age');

    const $person = $('<p>', {
      text: `${name} ${surname}: ${age}`,
    });

    return $person;
  }

  function renderData(formData) {
    let $container = $('.personDisplay');

    if ($container.length <= 0) {
      $container = $('<div>', {
        class: 'personDisplay',
      });
    }
    $container
      .empty()
      .append(renderPerson(formData))
      .append(renderSkills(formData))
      .append(renderPets(formData))
      .append(renderFriend(formData));

    return $container;
  }

  function renderSkills(formData) {
    const iterator = formData.entries();
    const objectData = Object.fromEntries(iterator);

    const keys = Object.keys(objectData);
    const skillsArray = [];

    for (let i = 0; i < keys.length; i++) {
      const keyName = keys[i];

      if (keyName === 'skill-input' || !keyName.startsWith('skill-')) {
        continue;
      }
      // || - SAU

      skillsArray.push(objectData[keyName]);
    }

    if (skillsArray.length <= 0) {
      return '';
    }

    const $p = $('<p>', {
      text: `Skills: ${skillsArray}`,
    });

    return $p;
  }

  function renderPets(formData) {
    const iterator = formData.entries();
    const objectData = Object.fromEntries(iterator);

    const keys = Object.keys(objectData);
    const petsArray = [];

    for (let i = 0; i < keys.length; i++) {
      const keyName = keys[i];

      if (!keyName.startsWith('pet-data')) {
        continue;
      }

      petsArray.push(objectData[keyName]);
    }

    if (petsArray.length <= 0) {
      return '';
    }

    const $ul = $('<ul>', {
      text: `Pets: ${petsArray}`,
    });

    return $ul;
  }

  function renderFriendUl() {
    const friendsClassName = 'renderFriendsUl';

    let $ul = $(`${friendsClassName}`);

    if ($ul.length <= 0) {
      $ul = $('<ul>', {
        class: friendsClassName,
      });
    }
  }

  function renderFriend(formData) {
    friends.forEach(function (friend) {
      const { name, surname, age } = friend;
      const fullName = `${name}, ${surname}, ${age}`;

      const friendLi = document.createElement('li');
      friendLi.innerText = fullName;

      formData.append(friendLi);
    });

    document.body.append(friendLi);
    // const friendName = formData.get('friend-name');
    // const friendSurname = formData.get('friend-surname');
    // const friendAge = formData.get('friend-age');

    // const $friend = $('<ul>', {
    //   text: `${friendName} ${friendSurname} ${friendAge}`,
    // });

    // return $friend;
  }

  function renderSkillControls() {
    function renderSkillsUl(skill) {
      const skillsClassName = 'renderSkillsUl';
      let $ul = $(`.${skillsClassName}`);

      if ($ul.length <= 0) {
        // sau $ul.length === 0
        $ul = $('<ul>', {
          class: skillsClassName,
        });
      }

      $ul
        .on('click', '.removeSkillButton', function () {
          const $removeSkillButton = $(this);

          $removeSkillButton.parent().remove();
        })
        .on('click', '.editSkillButton', function () {
          const $editSkillButton = $(this);

          $editSkillButton
            .siblings('input[name^="skill-"]')
            .attr('type', 'text');

          $editSkillButton.siblings('.skillDisplay').hide();
          $editSkillButton.siblings('.removeSkillButton').hide();
          $editSkillButton.siblings('.cancelSkillButton').hide();
          $editSkillButton.siblings('.saveSkillButton').hide();
          $editSkillButton.hide();
        })
        .on('click', '.cancelSkillButton', function () {
          const $cancelButton = $(this);

          $cancelButton.hide();
          $cancelButton
            .siblings('input[name^="skill-"]')
            .attr('type', 'hidden');
          $cancelButton.siblings('.saveSkillButton').hide();
          $cancelButton.siblings('.skillDisplay').show();
          $cancelButton.siblings('.removeSkillButton').show();
          $cancelButton.siblings('.editSkillButton').show();
        })
        .on('click', '.saveSkillButton', function () {
          const $saveButton = $(this);

          $saveButton
            .siblings('.skillDisplay')
            .text($saveButton.siblings('input[name^="skill-"]').val());

          // HOMEWORK HERE
        });

      $('<li>')
        .append(
          $('<span>', {
            text: skill,
            class: 'skillDisplay',
          }),
        )
        .append(
          $('<input>', {
            type: 'hidden',
            name: `skill-${skill}`,
            value: skill,
          }),
        )
        .append(
          $('<button>', {
            type: 'button',
            text: 'Elimina',
            class: 'removeSkillButton',
            title: 'Elimina skill',
          }),
        )

        .append(
          $('<button>', {
            type: 'button',
            text: 'Editeaza',
            class: 'editSkillButton',
            title: 'Editeaza skill',
          }),
        )
        .append(
          $('<button>', {
            type: 'button',
            text: 'Salveaza',
            class: 'saveSkillButton',
            title: 'Salveaza skill',
          }).hide(),
        )
        .append(
          $('<button>', {
            type: 'button',
            text: 'Anuleaza',
            class: 'cancelSkillButton',
            title: 'Anuleaza',
          }).hide(),
        )

        .appendTo($ul);

      return $ul;
    }

    const $skillInput = $('<input>', {
      placeholder: 'Skill',
      type: 'text',
      name: 'skill-input',
    });

    const $addButton = $('<button>', {
      text: 'Adauga skill',
      title: 'Adauga skill',
      type: 'button',
    }).on('click', function () {
      const $button = $(this);
      const inputValue = $button.prev().val().trim();
      // trim() pentru a sterge spatiile goale
      if (inputValue.length < 1) {
        return;
      }

      $button.after(renderSkillsUl(inputValue));

      $button.prev().val('');
    });

    const $addFriendButton = $('<button>', {
      text: 'Adauga prieten',
      title: 'Adauga prieten',
      type: 'button',
    }).on('click', function () {
      const $button = $(this);
      const inputValue = $button.prev().val().trim();
      if (inputValue.length < 1) {
        return;
      }

      $button.after(renderFriendUl(inputValue));

      $button.prev().val('');
    });

    const $container = $('<div>')
      .append($skillInput)
      .append($addButton)
      .append($addFriendButton);

    return $container;
  }
});
