document.addEventListener('DOMContentLoaded', function() {
    const equipamentos = [
        { id: 1, tipo: 'Câmera', status: 'Ativo', localizacao: 'Entrada Principal' },
        { id: 2, tipo: 'Antena RFID', status: 'Ativo', localizacao: 'Portão Lateral' },
        { id: 3, tipo: 'Câmera', status: 'Inativo', localizacao: 'Saída Secundária' }
    ];
  
    const veiculos = [
        { placa: 'XYZ-1234', marca: 'Toyota', modelo: 'Corolla', cor: 'Azul', velocidade: '45km/h', faixa_de_rolamento: '1', url_imagem: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg' },
        { placa: 'ABC-9876', marca: 'Honda', modelo: 'Civic', cor: 'Preto', velocidade: '55km/h', faixa_de_rolamento: '2', url_imagem: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { placa: 'WXY-5678', marca: 'Ford', modelo: 'Fusion', cor: 'Vermelho', velocidade: '50km/h', faixa_de_rolamento: '3', url_imagem: 'https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
    ];
  
    function renderEquipment() {
        const container = document.getElementById('equipamentos');
        container.innerHTML = '';
        equipamentos.forEach(equip => {
            const statusClass = equip.status === 'Ativo' ? 'active' : 'inactive';
            const equipDiv = document.createElement('div');
            equipDiv.className = 'equipment';
            equipDiv.innerHTML = `
                <strong>${equip.tipo}</strong> - ${equip.localizacao}
                <span class="status-dot ${statusClass}"></span>`;
            container.appendChild(equipDiv);
        });
    }
  
    function renderVehicles() {
      const container = document.getElementById('veiculos');
      container.innerHTML = '';
      veiculos.forEach(veiculo => {
          const vehicleDiv = document.createElement('div');
          vehicleDiv.className = 'vehicle';
          vehicleDiv.innerHTML = `
              <img src="${veiculo.url_imagem}" alt="Imagem do Veículo">
              <div class="vehicle-details">
                  <strong>Placa:</strong> ${veiculo.placa}<br>
                  <strong>Marca/Modelo:</strong> ${veiculo.marca} ${veiculo.modelo}<br>
                  <strong>Cor:</strong> ${veiculo.cor}<br>
                  <strong>Velocidade:</strong> ${veiculo.velocidade}<br>
                  <strong>Faixa:</strong> ${veiculo.faixa_de_rolamento}
              </div>`;
          container.appendChild(vehicleDiv);
      });
  }
  
    renderEquipment();
    renderVehicles();
  });