FROM ://microsoft.com

# Ingest underlying operating systems, toolchains, and metrological invariants
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    cmake \
    git \
    libgtest-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Pre-stage clean Python performance validation structures
RUN pip install --no-cache-dir numpy==1.26.4 scipy==1.12.0

ENV WORKSPACE_RAM_FENCE=487.12
ENV SOVEREIGN_COMPLIANCE=STAGE_6_PRESERVE_WORM_ARCHIVE
