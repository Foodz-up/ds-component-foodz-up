<template>
  <div>
    <div v-if="statusIs('Commandée')" class="grid grid-cols-5">
      <div>
        <div class="bg-yellow-800 h-6 mr-2" />
        <ButtonFoodzUp :title="'Commandée'" class="mt-4 bg-yellow-800 text-white hover:bg-yellow-600 self-end" @buttonClicked="changeStatus('Commandée')" />
      </div>
      <div>
        <div class="bg-gray-200 h-6 mr-2" />
        <ButtonFoodzUp :title="'Commande en préparation'" class="mt-4 bg-red-pastel text-white hover:bg-red-pastel-80 self-end" @buttonClicked="changeStatus('Commande en préparation')" />
      </div>
      <div>
        <div class="bg-gray-200 h-6 mr-2" />
        <ButtonFoodzUp :title="'Commande préparée'" class="mt-4 bg-yellow-pastel text-white hover:bg-yellow-pastel-80 self-end" @buttonClicked="changeStatus('Commande préparée')" />
      </div>
      <div>
        <div class="bg-gray-200 h-6 mr-2" />
        <ButtonFoodzUp :title="'En cours de livraison'" class="mt-4 bg-blue-pastel text-white hover:bg-blue-pastel-80 self-end" @buttonClicked="changeStatus('En cours de livraison')" />
      </div>
      <div>
        <div class="bg-gray-200 h-6" />
        <ButtonFoodzUp :title="'Livrée'" class="mt-4 bg-green-pastel text-white hover:bg-green-pastel-80 self-end" @buttonClicked="changeStatus('Livrée')" />>
      </div>
    </div>
    <div v-if="statusIs('Commande en préparation')" class="grid grid-cols-5">
      <div>
        <div class="bg-yellow-800 h-6 mr-2" />
        <ButtonFoodzUp :title="'Commandée'" class="mt-4 bg-yellow-800 text-white hover:bg-yellow-600 self-end" @buttonClicked="changeStatus('Commandée')" />
      </div>
      <div>
        <div class="bg-red-pastel h-6 mr-2" />
        <ButtonFoodzUp :title="'Commande en préparation'" class="mt-4 bg-red-pastel text-white hover:bg-red-pastel-80 self-end" @buttonClicked="changeStatus('Commande en préparation')" />
      </div>
      <div>
        <div class="bg-gray-200 h-6 mr-2" />
        <ButtonFoodzUp :title="'Commande préparée'" class="mt-4 bg-yellow-pastel text-white hover:bg-yellow-pastel-80 self-end" @buttonClicked="changeStatus('Commande préparée')" />
      </div>
      <div>
        <div class="bg-gray-200 h-6 mr-2" />
        <ButtonFoodzUp :title="'En cours de livraison'" class="mt-4 bg-blue-pastel text-white hover:bg-blue-pastel-80 self-end" @buttonClicked="changeStatus('En cours de livraison')" />
      </div>
      <div>
        <div class="bg-gray-200 h-6" />
        <ButtonFoodzUp :title="'Livrée'" class="mt-4 bg-green-pastel text-white hover:bg-green-pastel-80 self-end" @buttonClicked="changeStatus('Livrée')" />
      </div>
    </div>
    <div v-if="statusIs('Commande préparée')" class="grid grid-cols-5">
      <div>
        <div class="bg-yellow-800 h-6 mr-2" />
        <ButtonFoodzUp :title="'Commandée'" class="mt-4 bg-yellow-800 text-white hover:bg-yellow-600 self-end" @buttonClicked="changeStatus('Commandée')" />
      </div>
      <div>
        <div class="bg-red-pastel h-6 mr-2" />
        <ButtonFoodzUp :title="'Commande en préparation'" class="mt-4 bg-red-pastel text-white hover:bg-red-pastel-80 self-end" @buttonClicked="changeStatus('Commande en préparation')" />
      </div>
      <div>
        <div class="bg-yellow-pastel h-6 mr-2" />
        <ButtonFoodzUp :title="'Commande préparée'" class="mt-4 bg-yellow-pastel text-white hover:bg-yellow-pastel-80 self-end" @buttonClicked="changeStatus('Commande préparée')" />
      </div>
      <div>
        <div class="bg-gray-200 h-6 mr-2" />
        <ButtonFoodzUp :title="'En cours de livraison'" class="mt-4 bg-blue-pastel text-white hover:bg-blue-pastel-80 self-end" @buttonClicked="changeStatus('En cours de livraison')" />
      </div>
      <div>
        <div class="bg-gray-200 h-6" />
        <ButtonFoodzUp :title="'Livrée'" class="mt-4 bg-green-pastel text-white hover:bg-green-pastel-80 self-end" @buttonClicked="changeStatus('Livrée')" />
      </div>
    </div>
    <div v-if="statusIs('En cours de livraison')" class="grid grid-cols-5">
      <div>
        <div class="bg-yellow-800 h-6 mr-2" />
        <ButtonFoodzUp :title="'Commandée'" class="mt-4 bg-yellow-800 text-white hover:bg-yellow-600 self-end" @buttonClicked="changeStatus('Commandée')" />
      </div>
      <div>
        <div class="bg-red-pastel h-6 mr-2" />
        <ButtonFoodzUp :title="'Commande en préparation'" class="mt-4 bg-red-pastel text-white hover:bg-red-pastel-80 self-end" @buttonClicked="changeStatus('Commande en préparation')" />
      </div>
      <div>
        <div class="bg-yellow-pastel h-6 mr-2" />
        <ButtonFoodzUp :title="'Commande préparée'" class="mt-4 bg-yellow-pastel text-white hover:bg-yellow-pastel-80 self-end" @buttonClicked="changeStatus('Commande préparée')" />
      </div>
      <div>
        <div class="bg-blue-pastel h-6 mr-2" />
        <ButtonFoodzUp :title="'En cours de livraison'" class="mt-4 bg-blue-pastel text-white hover:bg-blue-pastel-80 self-end" @buttonClicked="changeStatus('En cours de livraison')" />
      </div>
      <div>
        <div class="bg-gray-200 h-6" />
        <ButtonFoodzUp :title="'Livrée'" class="mt-4 bg-green-pastel text-white hover:bg-green-pastel-80 self-end" @buttonClicked="changeStatus('Livrée')" />
      </div>
    </div>
    <div v-if="statusIs('Livrée')" class="grid grid-cols-5">
      <div>
        <div class="bg-yellow-800 h-6 mr-2" />
        <ButtonFoodzUp :title="'Commandée'" class="mt-4 bg-yellow-800 text-white hover:bg-yellow-600 self-end" @buttonClicked="changeStatus('Commandée')" />
      </div>
      <div>
        <div class="bg-red-pastel h-6 mr-2" />
        <ButtonFoodzUp :title="'Commande en préparation'" class="mt-4 bg-red-pastel text-white hover:bg-red-pastel-80 self-end" @buttonClicked="changeStatus('Commande en préparation')" />
      </div>
      <div>
        <div class="bg-yellow-pastel h-6 mr-2" />
        <ButtonFoodzUp :title="'Commande préparée'" class="mt-4 bg-yellow-pastel text-white hover:bg-yellow-pastel-80 self-end" @buttonClicked="changeStatus('Commande préparée')" />
      </div>
      <div>
        <div class="bg-blue-pastel h-6 mr-2" />
        <ButtonFoodzUp :title="'En cours de livraison'" class="mt-4 bg-blue-pastel text-white hover:bg-blue-pastel-80 self-end" @buttonClicked="changeStatus('En cours de livraison')" />
      </div>
      <div>
        <div class="bg-primary h-6" />
        <ButtonFoodzUp :title="'Livrée'" class="mt-4 bg-green-pastel text-white hover:bg-green-pastel-80 self-end" @buttonClicked="changeStatus('Livrée')" />
      </div>
    </div>
  </div>
</template>
